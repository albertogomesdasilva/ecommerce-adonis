'use strict'

class AdminStoreCategory {
  get rules () {
    return {
      // validation rules
      title: 'required',
      // description: 'description'
      description: 'required'
    }
  }
}

module.exports = AdminStoreCategory
