const express = require('express')
const AssociatedView = require('./views/AssociatedView')
const ProductView = require('./views/ProductView')
const ServiceView = require('./views/ServiceView')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extends: false}))    
app.use(AssociatedView)
app.use(ProductView)
app.use(ServiceView)

app.listen(8000, () => console.log('Server online em http://localhost:8000'))
