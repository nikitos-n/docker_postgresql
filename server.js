const express = require("express")
const server = express()
const PORT = 80

const {Client} = require("pg")

server.listen(PORT, err => {
    if (err) {
        console.error(err)
        return process.exit(1)
    }
    console.log(`Server running on ${PORT}`)
})


server.get("/", (req, res) => res.status(200).send('Hello'));

const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'db_nikita',
    database: 'NikitaDB',
    port: 5432,
})

client.connect()


const Cars = require("./db/models/cars")
const Owners = require("./db/models/owners")


const firstOwner = await Owners.query().insert({
    id: 1,
    firstName: "Nikita",
    lastName: "Nikolski",
    age: 20
})

console.log("Persons:")

console.log(`${firstOwner.id}. Name: ${firstOwner.firstName}, Surname: ${firstOwner.lastName}, Age: ${firstOwner.age}`)

const secondOwner = await Owners.query().insert({
    id: 1,
    firstName: "Pavel",
    lastName: "Glyad",
    age: 2
})

console.log(`${secondOwner.id}. Name: ${secondOwner.firstName}, Surname: ${secondOwner.lastName}, Age: ${secondOwner.age}`)

const secondOwnerUpdated = await Owners.query()
    .findById(2)
    .patch({
        firstName: "Palych"
    })

console.log(`${secondOwnerUpdated.id}. Name: ${secondOwnerUpdated.firstName}, Surname: ${secondOwnerUpdated.lastName}, Age: ${secondOwnerUpdated.age}`)
console.log(`${secondOwner.id}. Name: ${secondOwner.firstName}, Surname: ${secondOwner.lastName}, Age: ${secondOwner.age}`)

console.log("Cars:")

const firstCar = await Cars.query().insert({
    id: 1,
    idOwner: 1,
    model: "Subaru Impreze WRX STI"
})

console.log(`${firstCar.id}. OwnerId: ${firstCar.idOwner}, Model: ${firstCar.model}}`)

const secondCar = await Cars.query().insert({
    id: 2,
    idOwner: 1,
    model: "BMW M5 e60"
})

console.log(`${secondCar.id}. OwnerId: ${secondCar.idOwner}, Model: ${secondCar.model}}`)

const thirdCar = await Cars.query().insert({
    id: 3,
    idOwner: 2,
    model: "Toyota Supra"
})

console.log(`${thirdCar.id}. OwnerId: ${thirdCar.idOwner}, Model: ${thirdCar.model}}`)

const firstPersonsCars = await Cars.query()
    .select("id", "model")
    .where("idOwner", 1)

console.log("Seleсt FirstPersoncars: ")

console.log(firstPersonsCars[0].model)
console.log(firstPersonsCars[1].model)