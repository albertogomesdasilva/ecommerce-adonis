'use strict'

const Helpers = require('@adonisjs/ignitor/src/Helpers')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Image = use('App/Models/Image')

const fs = use('fs')

const { manage_single_upload, manage_multiple_uploads } = use('App/Helpers')

/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  /**
   * Show a list of all images.
   * GET images
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, pagination }) {
    let images =  await Image.query().orderBy('id', 'DESC').paginate(pagination.page, pagination.limit)
    return response.send(images)

  }

  /**
   * Render a form to be used for creating a new image.
   * GET images/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
 
  async store ({ request, response }) {
    try {
      // Capturar uma imagem do request
          const fileJar = request.file('images', {
            types: ['image'],
            size: '2mb'
          })
      // Retorno para o usuário
       let images = []
      // Caso seja um único arquivo - manage_single_upload
      
       if(!fileJar.files) // Se fileJar não estiver vazia foi feito upload de vários arquivos ,senão, de um único arquivo.
        {  
           const file = await manage_single_upload(fileJar)

            if(file.moved()) {
              const image = await Image.create({
                path: file.fileName,
                size: file.size,
                original_name: file.clientName,
                extension: file.subtype
              })

              images.push(images)

              return response.status(201).send({ successes: images, errors: {} })
            }

            return response.status(400).send({
              message: 'Não foi possível processar esta imagem no momento!'
            })

          } 
          // Caso seja vários arquivos - manage_multiple_uploads
          let files = await manage_multiple_uploads(fileJar)

          await Promise.all(
            files.successes.map(async file => {
              const images = await Image.create({
                path: file.fileName,
                size: file.size,
                original_name: file.clientName,
                extension: file.subtype
              })
              images.push(image)
            })
          )

          return response.status(201).send({ successes: images, errors: files.error })

        } catch(error) {
          return response.status(400).send({
            message: 'Não foi possível processar a sua solicitação!'
          })
        }
  }

  /**
   * Display a single image.
   * GET images/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params: { id }, request, response, view }) {
    const image = await Image.findOrFail(id)
    return response.send(image)
  }


  /**
   * Update image details.
   * PUT or PATCH images/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params: { id }, request, response }) {
    const image = await Image.findOrFail(id)

    try {
      image.merge(request.only(['original_name']))
      await image.save()

      return response.status(200).send(image)

    } catch(error) {
      return response.status(400).send({
        message: 'Não foi possível atualizar esta imagem no momento!'
      })
    }
  }

  /**
   * Delete a image with id.
   * DELETE images/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id }, request, response }) {
    const image = await Image.findOrFail(id)
    try {
        let filepath = Helpers.publicPath(`uploads/${image.path}`)

        await fs.unlink(filepath, err => {
          if(!err) 
        //  await image.delete()
          image.delete()
        })

        return response.status(204).send()

    } catch(error) {
      return response.status(400).send({
        message: 'Não foi possível deletar a imagem no momento!'
      })
    }
  }
}

module.exports = ImageController
