const express = require('express')
const ProductController = require('../controllers/ProductController')

const ProductView = express.Router()

ProductView 
         // products
    .get('/view/product', ProductController.index)
    .post('/create/product', ProductController.create)
    .put('/update/product/:id', ProductController.update)
    .delete('/delete/product/:id', ProductController.delete)


module.exports = ProductView