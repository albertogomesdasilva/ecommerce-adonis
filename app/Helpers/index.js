'use strict'

const crypto = use('crypto')
const Helpers = use('Helpers')

/**
 * Generate randon string
 * 
 * @param { int } lenght -> O tamanho da string que você quer gerar
 * @return { string } uma string randômica do tamanho do lenght
 */

const str_random = async (length = 40) => {
    let string = ''
    let len = string.length

    if(len < length) {
        let size = length - len
        let bytes = await crypto.randomBytes(size)
        let buffer =  Buffer.from(bytes)
        string += buffer
            .toString('base64')
            .replace(/[^a-zA-Z0-9]/g, '')
            .substr(0, size)
    }
    return string
}

/**
 * Move um único arquivo para o caminho especificado, se nenhum caminho for especificado
 * então 'public/uploads' será utilizado
* @param { FileJar } file - arquivo a ser gerenciado
* @param { string } path o caminho para onde o arquivo deverá ser movido
 */ 

const manage_single_upload = async (file, path = null ) => {
    path = path ? path : Helpers.publicPath('uploadas')

// Gera um nome aleatório
const random_name = await str_random(30)
let filename = `${new Date().getTime()} - ${random_name}.${file.subtype}`

// Renomeia o arquivo e move para o path
await file.move(path, {
    name: filename
})

return file

}


/**
 *  Move múltiplos arquivos para o caminho especificado, se nenhum for especificado
 * então 'public/uploads' será utilizado.
 * @param { fileJar } fileJar
 * @param { string } path
 * @return  { Object }
*/

const manage_multiple_uploads = async (fileJar, path = null) => {
    path = path ?  path: Helpers.publicPath('uploads')
    let successes = [],
    errors = [] 

    await Promise.all(fileJar.files.map(async file => {
        let random_name = await str_random(30)
        let filename = `${new Date().getTime()} - ${random_name}.${file.subtype}`

        // Move o arquivo
        await file.move(patch, {
            name: filename
        })

        // Verificar se moveu o arquivo
        if(file.moved()) {
            successes.push(file)
        } else {
            errors.push(file.error())
        }
    })
    )

    return { successes: errors }
}


module.exports = { str_random }