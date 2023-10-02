'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const { str_randon } = use('App/Helpers')

class PasswordReset extends Model {
    static boot() {
        super.boot()
        
        this.addHook('beforeCreate', async model => {
            model.token = await str_randon(25)

            const expires_at = new Date()

            expires_at.setMinutes(now.getMinutes() + 30)

            model.expires_at = expires_at
        })
    
    }

    // Formatar os valores para o padrão do Mysql
    static get dates() {
        return['created_at', 'updated_at', 'expires_at']
    }




}

module.exports = PasswordReset
