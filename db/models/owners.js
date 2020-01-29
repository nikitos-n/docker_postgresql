const  {Model} = require("objection")

module.exports = class OwnerModel extends Model {

    static get tableName() {
        return "owners"
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
                firstName: {type: 'string', minLength: 1, maxLength: 255},
                lastName: {type: 'string', minLength: 1, maxLength: 255},
                age: {type: "number"}
            }
        }
    }

}