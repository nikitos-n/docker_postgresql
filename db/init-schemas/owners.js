const {Owners} =  require("../constants/")

exports.up = knex => knex.schema
    .createTable(Owners, table => {
        table.increments("id").primary()
        table.string("firstName", 40)
        table.string("lastName", 40) 
        table.number("age")       
    })
    
exports.down = knex => {
    await knex.schema.dropTableIfExists(Owners)
}