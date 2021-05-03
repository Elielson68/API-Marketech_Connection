exports.up = knex => knex.schema.createTable('associated_shop', (table) => {
    table.increments('id')
    table.text('name').unique().notNullable()
    table.text('image')
    table.text('description')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    

})

exports.down = knex => knex.schema.dropTable('associated_shop')
