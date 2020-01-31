const {Model} = require("objection")
const CarsModel = require("./cars")
const constants = require("../constants")

module.exports = class OwnersModel extends Model {
    static get tableName() {
        return constants.Onwers
    }

    static get idColumn() {
        return "id"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["firstName", "lastName"],

            properties: {
                id: {type: "integer"},
                firstName: {type: 'string', minLength: 1, maxLength: 40},
                lastName: {type: 'string', minLength: 1, maxLength: 40},
                age: {type: "number"}
            }
        }
    }

    //Relations
    static relationMappings = {
        owner: {
            relation: Model.HasManyRelation,
            modelClass: CarsModel,
            join: {
                from: `${constants.Onwers}.id`,
                to: `${constants.Cars}.idOwner`
              }
        }
    }
}