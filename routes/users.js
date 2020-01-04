var express = require('express')
var router = express.Router()

var User = require('../models/user')

const bcrypt = require('bcrypt')
const saltRounds = 10

/* GET ALL USERS */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

/* GET ONE USER*/
router.get('/:id', getUser, (req, res, next) => {
  res.send(res.user)
})

/*CREATE ONE USER*/
router.post('/', async (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    })
    try {
      const newUser = user.save()
      res.status(201).json(user)
    } catch (err) {
      //fail due to bad data
      res.status(400).json({message: err.message})
    }
  })

})

/* UPDATE ONE USER*/
router.patch('/:id', getUser, async (req, res, next) => {
  if(req.body.name != null) {
    res.user.name = req.body.name
  }
  if(req.body.email != null) {
    res.user.email = req.body.email
  }
  if(req.body.role != null) {
    res.user.role = req.body.role
  }

  // Password will not be changed this way
  // TODO: Write reset password function

  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
})

/* DELETE ONE USER*/
router.delete('/:id', getUser, async (req, res, next) => {
  try {
    await res.user.remove()
    res.json({message: 'User deleted'})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

async function getUser(req, res, next) {
  let user
  try {
    user = await User.findById(req.params.id)
    if (user === null) {
      return res.status(404).json({message: 'User does not exist'})
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }

  res.user = user
  next()
}

module.exports = router
