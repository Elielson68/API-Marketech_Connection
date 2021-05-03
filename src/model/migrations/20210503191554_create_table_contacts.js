
exports.up = knex => knex.schema.createTable('contacts', (table) => {
    table.increments('id')
    table.text('facebook')
    table.text('instagram')
    table.text('whatsapp')
    table.text('website')

    //Relacionamento
    table.integer('associated_shop_id')
        .references('associated_shop.id')
        .notNullable()
        .onDelete('CASCADE')
        .unique()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('contacts')

