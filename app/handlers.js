const {sendMail} = require('./mail')
const {saveStudent} = require('./db/crudOperations')

const registerStudent = function (req, res) {
    const student = req.body
    sendMail(student.name, student.email)
    saveStudent(student).then(() => {
        res.send("Student registration successful")
    })
}

module.exports = {registerStudent}