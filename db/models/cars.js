const {Model} = require("objection")
const Owners = require("./owners")

module.exports = class CarsModel extends Model {
    
    //Table name
    static get tableName() { 
        return "cars"
    }

    //Primiray key
    static get idColumn() {
        return "id"
    }

    //Columns
    static get jsonSchema() {
        return {
            type: "object",
            required: ['model'],

            properties: {
                id: {type: "integer"},
                idOwner: {type: ["integer", "null"]},
                model: {type: "string", minLength: 1, maxLength: 40}
            }
        }
    }

    //Relations
    static relationMappings = {
        owner: {
            relation: Model.BelongsToOneRelation,
            modelClass: Owners,
            join: {
                from: "cars.idOwner",
                to: "owners.id"
              }
        }
    }

}