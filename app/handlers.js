const {sendOTP} = require('./mail')
const {saveStudent} = require('./db/crudOperations')

const generateOTP = () => Math.floor(Math.random() * 99999)

const registerStudent = function (req, res) {
    const student = req.body
    const otp = generateOTP()
    sendOTP(student.name, student.email, otp)
    saveStudent({...student, otp}).then(() => {
        res.send("Student registration successful")
    })
}

module.exports = {registerStudent}