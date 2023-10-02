'use strict'

const { response } = require('express')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')


/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const { name } = request.input('name')
    const query = User.query()

    if(name) {
      query.where = ('name', 'LIKE', `%${name}%`)
      query.orWhere = ('surname', 'LIKE', `%${name}%`)
      query.orWhere = ('name', 'LIKE', `%${name}%`)
    }
    const users = await query.paginate(pagination.page, pagination.limit)
    return response.send(users)
  }


  /**
     *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try{
      const userData = request.only([
        'name', 'surname', 'email', 'password', 'image_id'
      ])

      const user = await User.create(userData)
      return response.status(201).send(user)
    } catch(error) {
      return response.status(400).send({ message: 'Não foi possível criar o usuário no momento!'})

    }

  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params: { id }, request }) {
    const user = await User.findOrFail(id)
    return response.send(user)
  }
  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params: { id }, request, response }) {
    const user = await User.findOrFail(id)
    const userData = request.only(['name', 'surname', 'email', 'password', 'image_id'])
    user.merge(userData)
    await user.save()
    return response.send(user)
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id }, request, response }) {
    const user = await User.findOrFail(id)
    try {
      await user.delete()
      return response.status(204).send()
    } catch(error) {
      response.status(500).send( { message: 'Não foi possível deletar este usuário!'})
    }
  }
}

module.exports = UserController
