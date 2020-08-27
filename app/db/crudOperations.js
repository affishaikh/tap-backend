const {connection} = require('./client')
const TAP_DB = 'tap-db';
const STUDENTS_COLLECTION = "students";

const saveStudent = function (student) {
    return connection
        .then(client => {
            const db = client.db(TAP_DB)
            return db.collection(STUDENTS_COLLECTION).insertOne(student)
        });
}

const findByEmail = function (email) {
    return connection
        .then(client => {
            const db = client.db(TAP_DB)
            return db.collection(STUDENTS_COLLECTION).findOne({email: email})
        });
}

module.exports = {saveStudent, findByEmail}