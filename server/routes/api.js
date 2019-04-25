const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = 'mongodb+srv://yory100:architect100@cluster0-sj9fv.mongodb.net/test?retryWrites=true'

mongoose.connect(db, err => {
      if (err) {
            console.log('Error!' + err)
      } else {
            console.log('Connected to mongodb')
      }
})

router.get('/', (req, res) => {
      res.send('From Api routes')
})

router.post('/register', (req, res) => {
      let userData = req.body
      let user = new User(userData)
      user.save((error, registeredUser) => {
            if (error) {
                  console.log(error)
            } else {
                  res.status(200).send(registeredUser)
            }
      })
})

module.exports = router