const express = require('express')
const AssociatedController = require('../controllers/AssociatedController')
const AssociatedView = express.Router()

AssociatedView
        // AssociatedShop
    .get('/view/shop', AssociatedController.index)
    .get('/shop/contact/:id', AssociatedController.indexContacts)
    .post('/create/shop', AssociatedController.create)
    .put('/update/shop/:id', AssociatedController.update)
    .delete('/delete/shop/:id', AssociatedController.delete)


module.exports = AssociatedView