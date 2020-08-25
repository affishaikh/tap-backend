const express = require('express')
const bodyParser = require('body-parser')
const {registerStudent} = require('./handlers')

const app = express()

app.use(bodyParser.json())

app.post("/student/register", registerStudent)

module.exports = {app}