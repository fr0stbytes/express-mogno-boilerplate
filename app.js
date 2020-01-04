require('dotenv').config()
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

// Database Connection
var mongoose = require('mongoose')

// Create a .env file at the root of the app and add process.env.DATABASE_URL = "your database path"
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//         // connector.useDb('sample_airbnb?');
//         const Listing = mongoose.model(
//             'listingsAndReviews',
//             new mongoose.Schema({
//                 name: String,
//                 summary: String,
//             }),
//             'sample_airbnb'
//         );
//         Listing.findOne({}).then((r) => {
//             console.log(r);
//         })
//     })

const db = mongoose.connection
db.on('error', (error) => {
  console.error(error)
})
db.once('open', () => {
  console.log('connected to database')
})

// Routes
var usersRouter = require('./routes/users')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/users', usersRouter)

module.exports = app
