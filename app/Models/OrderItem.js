'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {

    /**
     * 
     * Informa que a tabela não tem as duas colunas timestamps (created_at e updated_at)
     */
    static get traits() {
        return ['App/Models/Traits/NoTimestamp']
    }



    product() {
        return this.belongsTo('App/Models/Product')
    }

    order() {
        return this.belongsTo('App/Models/')
    }
}

module.exports = OrderItem
