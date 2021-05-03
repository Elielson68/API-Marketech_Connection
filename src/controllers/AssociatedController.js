const knex = require('../model/index')


module.exports = {
    async index(req, res, next) {
        try{
            const results = await knex('associated_shop')
            return res.json(results)
        } catch(error) {
            next(error)
        }
    }, 
    async indexContacts(req, res, next) {
        try{
            const { id } = req.params
            knex('associated_shop').where({ id }).returning(['id', 'name', 'image', 'description']).first().then(async (associated) => {
                await knex('contacts').where({ 'associated_shop_id': associated.id }).returning(['facebook', 'instagram', "whatsapp", "website"]).first().then((contacts) => {
                    associated['contact'] = contacts
                    return res.json(associated)
                })
            })
        }catch(error){
            next(error)            
        }
    },
    async create (req, res, next) {
        try {
            let { name, image, description, contacts } = req.body
            let { facebook, instagram, whatsapp, website } = contacts
            let teste = await knex('associated_shop').insert({ name, image, description }).returning(['id']).then(async (results) => {
                await knex('contacts').insert({ facebook, instagram, whatsapp, website, 'associated_shop_id': results[0].id }).then(() => {
                    return res.status(201).send()
                })
            })
           
        } catch(error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { id } = req.params
            const { name, image, description, contacts } = req.body
            await knex('associated_shop').update( { name, image, description, contacts } ).where({ id })
            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    }, 
    async delete(req, res, next) {
        try {
            const { id } = req.params
            await knex('associated_shop').del().where({ id })
            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    }
}