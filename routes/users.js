const express = require('express')

const db = require('../server/db')

const router = express.Router()

// Home
router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.send({users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// New User Post to User List Home
router.post('/', (req, res) => {
  db.addUser()
    .then(user => {
      console.log(user)
      // res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// User Profile Page
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
