
exports.up = knex => knex.schema.createTable('product', (table) => {
    table.increments('id')
    table.text('name')
    table.text('image')
    table.float('price', [8], [2]).notNullable()
    table.text('description')

    //Relacionamento

    table.integer('associated_shop_id').references('associated_shop.id').notNullable().onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('product')

