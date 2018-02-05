const express = require('express')
const bodyParser = require('body-parser')

const users = require('./routes/users')

const server = express()

// Middleware
server.use(bodyParser.json())

// Routes
server.use('/users', users)
server.use(express.static('public'))

module.exports = server
