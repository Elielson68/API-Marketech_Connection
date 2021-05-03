const knexFile = require('../../knexfile')
const knex = require('knex')(knexFile['development'])

module.exports = knex