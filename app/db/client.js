const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017';

const connection = new MongoClient(URL).connect().then(connection => {
    console.log("Connection with mongo established successfully")
    return connection
}, () => {
    console.error("Error encountered while connecting to mongo")
});

module.exports = {connection}