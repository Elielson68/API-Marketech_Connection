exports.up = knex => knex.schema.createTable('service', (table) => {
    table.increments('id')
    table.text('name')
    table.text('description')

    //Relacionamento

    table.integer('associated_shop_id').references('associated_shop.id').notNullable().onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('service')
