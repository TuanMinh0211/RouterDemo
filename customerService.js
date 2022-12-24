var mongoClient = require('mongodb').MongoClient
var url = 'mongodb://0.0.0.0:27017'
const { Int32, ObjectId } = require('bson')

async function getDB(){
    let client = await mongoClient.connect(url) //await: doi ham trien khai, bat buoc phai co async
    let db = client.db("GCH1002")
    return db
}


async function insertNewCustomer(customer){    
    let db = await getDB()
    let id = await db.collection("customers").insertOne(customer)
    return id
}


async function getAllCustomer(){    
    let db = await getDB()
    let result = await db.collection("customers").find().toArray()
    return result
}
module.exports = {insertNewCustomer, getAllCustomer}