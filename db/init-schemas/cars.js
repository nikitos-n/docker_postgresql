const {Cars, Onwers} = require("../constants")

exports.up = knex => knex.schema
    .createTable(Cars, table => {
        table.increments("id").primary()
        table.string("model", 40)
        table.string("model", 40)
        table.string("model", 40)
    })

exports.down = async knex => {
    await knex.schema.dropTableIfExists(Cars)
}