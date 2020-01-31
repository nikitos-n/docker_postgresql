const {Model} = require("objection")
const constants = require("../constants")

module.exports = class CarsModel extends Model {
    
    //Table name
    static get tableName() { 
        return constants.Cars
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

}