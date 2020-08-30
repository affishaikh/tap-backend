const {sendOTP} = require('./mail')
const {saveStudent} = require('./db/crudOperations')
const {findByEmail} = require('./db/crudOperations')

const generateOTP = () => Math.floor(Math.random() * 99999)

const registerStudent = function (req, res) {
    const student = req.body
    const otp = generateOTP()
    sendOTP(student.name, student.email, otp)
    saveStudent({...student, otp}).then(() => {
        res.status(200).send()
    })
}

const validateOTP = function (req, res) {
    const {email, otp} = req.body
    findByEmail(email).then(student => {
            if (student.otp == otp) {
                res.status(200).send()
            } else {
                res.status(401).send()
            }
        }
    )
}

module.exports = {registerStudent, validateOTP}