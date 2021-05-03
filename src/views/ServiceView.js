const express = require('express')
const ServicesController = require('../controllers/ServicesController')


const ServiceView = express.Router()

ServiceView 
        // services
    .get('/view/service', ServicesController.index)
    .post('/create/service', ServicesController.create)
    .put('/update/service/:id', ServicesController.update)
    .delete('/delete/service/:id', ServicesController.delete)


module.exports = ServiceView