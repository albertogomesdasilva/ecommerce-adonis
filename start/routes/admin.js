'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



Route.group(function () {
  /**Categories resource routes */

    Route.resource('categories', 'CategoryController').apiOnly()


  /**Products resource routes */

    Route.resource('products', 'ProductController').apiOnly()

    
  /**Coupon resource routes */

    Route.resource('coupons', 'CouponController').apiOnly()
    
  /** Order resource routes */

    Route.post('orders/:id/discount', 'OrderController.applyDiscount')  // Esta rota tem que ficar antes das resource

    Route.delete('order/:id/discount', 'OrderController.removeDiscount')

    Route.resource('orders', 'OrderController').apiOnly()
  
    /** Image resource routes */

    Route.resource('images', 'ImageController').apiOnly()

    
    /** User resource routes */

    Route.resource('user', 'UserController').apiOnly()

    


  })
    .prefix('v1/admin')
    .namespace('Admin')  

  
