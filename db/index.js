const { Model } = require('objection');
const Knex = require("knex")

const knex = Knex({
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_NAME,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT
    },
    pool: {
      min: 4,
      max: 15
    }
  })
  
  Model.knex(knex)

  module.exports = {
    OwnersModel: require("./models/owners"),
    CarsModel: require("./models/cars"),
    Query: require("./scripts/")
  }