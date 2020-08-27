const express = require('express')
const bodyParser = require('body-parser')
const {registerStudent} = require('./handlers')
const {validateOTP} = require('./handlers')

const app = express()

app.use(bodyParser.json())

app.post("/student/register", registerStudent)

app.post("/validate-otp", validateOTP)

module.exports = {app}