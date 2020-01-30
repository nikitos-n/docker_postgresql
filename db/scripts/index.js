//INSERT INTO Owners

async function insertIntoOwners(Owners) {
    const firstOwner = await Owners.query().insert({
        id: 1,
        firstName: "Nikita",
        lastName: "Nikolski",
        age: 20
    })
    console.log(`${firstOwner.id}. Name: ${firstOwner.firstName}, Surname: ${firstOwner.lastName}, Age: ${firstOwner.age}`)

    const secondOwner = await Owners.query().insert({
        id: 2,
        firstName: "Pavel",
        lastName: "Glyad",
        age: 21
    })
    console.log(`${secondOwner.id}. Name: ${secondOwner.firstName}, Surname: ${secondOwner.lastName}, Age: ${secondOwner.age}`)

    const secondOwnerUpdated = await Owners.query()
    .findById(2)
    .patch({
        firstName: "Palych"
    })
    console.log(`${secondOwnerUpdated.id}. Name: ${secondOwnerUpdated.firstName}, Surname: ${secondOwnerUpdated.lastName}, Age: ${secondOwnerUpdated.age}`)

}
    
//INSERT INTO Cars

async function insertIntoCars(Cars) {

    const firstCar = await Cars.query().insert({
        id: 1,
        idOwner: 1,
        model: "Subaru Impreza WRX STI"
    })
    console.log(`${firstCar.id}. OwnerId: ${firstCar.idOwner}, Model: ${firstCar.model}}`)

    secondCar = await Cars.query().insert({
            id: 2,
            idOwner: 1,
            model: "BMW M5 e60"
        })
    console.log(`${secondCar.id}. OwnerId: ${secondCar.idOwner}, Model: ${secondCar.model}}`)

    thirdCar = await Cars.query().insert({
        id: 3,
        idOwner: 2,
        model: "Toyota Supra"
    })
    console.log(`${thirdCar.id}. OwnerId: ${thirdCar.idOwner}, Model: ${thirdCar.model}}`)

} 


//SELECT FROM Cars
async function selectFromTables(Cars) {

        const firstPersonsCars = await Cars.query()
            .select("id", "model")
            .where("idOwner", 1)
        console.log(firstPersonsCars)

}

module.exports = {
    insertIntoOwners: insertIntoOwners,
    insertIntoCars: insertIntoCars,
    selectFromTables: selectFromTables
}