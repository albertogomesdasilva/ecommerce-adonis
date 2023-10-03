'use strict'

class OrderService{

    constructor(mode, trx = false) {
        this.model = this.model
        this.trx = trx
    }

    async syncItems(items) {
        if(!Array.isArray(items)){
            return false
        }

        await this.model.items().delete(this.trx)
        
        return await this.model.items().createMany(items, this.trx)
    }

    async updateItems(items){
        let currentItems = await this.model
            .items()
            .whereIn('id', items.map(item => item.id))
            .fetch()
        // Deleta os itens que o user não quer mais
        await this.model.items().whereNotIn('id', items.map(item => item.id)).delete(this.trx)

        // Atualiza os valores e quantidades
        await Promise.all(currentItems.rows.map(async item => {
            item.fill(items.find(n => n.id === item.id))
            await item.save(thies.trx)

        })
      )
    }

    

}

module.exports = OrderService