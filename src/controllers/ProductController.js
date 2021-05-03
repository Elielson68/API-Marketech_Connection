const knex = require('../model/index')


module.exports = {
    async index(req, res, next) {
        try{
            const {associated_shop_id} = req.query

            const query = knex('product')

            if(associated_shop_id) {
                query.where({associated_shop_id})
            }

            const results = await query
            return res.json(results)
        } catch(error) {
            next(error)
        }
    }, 
    async create (req, res, next) {
        try {
            let {  name, image, price, description, associated_shop_id  } = req.body
            await knex('product').insert({ name, image, price, description, associated_shop_id})
            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { id } = req.params
            const { name, image, price, description, associated_shop_id } = req.body
            await knex('product').update( { name, image, price, description, associated_shop_id } ).where({ id })
            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    }, 
    async delete(req, res, next) {
        try {
            const { id } = req.params
            await knex('product').del().where({ id })
            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    }
}