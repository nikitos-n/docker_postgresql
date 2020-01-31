const express = require("express")
const server = express()
const {Client} = require("pg")
require("dotenv").config({path: `${__dirname}/.env.local`})

const {OwnersModel, CarsModel, Query} = require("./db")
const {insertIntoOwners, insertIntoCars, selectFromTables} = Query


server.listen(process.env.SERVER_PORT, err => {
    if (err) {
        console.error(err)
        return process.exit(1)
    }
    console.log(`Server running on ${process.env.SERVER_PORT}`)
})


server.get("/", (req, res) => res.status(200).send('Hello'));

const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_NAME,
    port: process.env.POSTGRES_PORT,
})

client.connect()
    .then(() => {
        console.log(`Connected to ${process.env.POSTGRES_NAME}`)
        // insertIntoOwners(OwnersModel)
        // insertIntoCars(CarsModel)
        // selectFromTables(CarsModel)
    })
    .catch(err => {
        console.error(err)
    })