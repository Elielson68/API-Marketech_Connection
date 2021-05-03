const knex = require('../model/index')


module.exports = {
    async index(req, res, next) {
        try{
            const {associated_shop_id} = req.query

            const query = knex('service')

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
            let { name, description, associated_shop_id} = req.body
            await knex('service').insert({ name, description, associated_shop_id })
            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { id } = req.params
            const { name, description, associated_shop_id } = req.body
            await knex('service').update( { name, description, associated_shop_id } ).where({ id })
            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    }, 
    async delete(req, res, next) {
        try {
            const { id } = req.params
            await knex('service').del().where({ id })
            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    }
}