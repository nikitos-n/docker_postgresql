const express = require("express")
const server = express()
const PORT = 80

const Client = require("pg")

server.listen(PORT, err => {
    if (err) {
        console.error(err)
        return process.exit(1)
    }
    console.log(`Server running on ${PORT}`)
})

// server.get('/', (req, res) => res.status(200).send('hello'));

server.get("/", (req, res) => res.status(200).send('Hello'));

const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'db_nikita',
    database: 'NikitaDB',
    port: 5432,
})

client.connect()