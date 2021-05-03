module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: "postgres",
            host: "localhost",
            port: 5432,
            user: "postgres",
            password: '123456'
        },
        migrations: {
            tablename: 'knex_migrations',
            directory: `${__dirname}/src/model/migrations`,
        }
    }
}