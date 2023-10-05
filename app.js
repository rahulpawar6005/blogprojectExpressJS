const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/webRoute')
const connectdb = require('./db/connectdb')
const fileUpload = require('express-fileupload')
var cloudinary = require('cloudinary');
//database connectivity
connectdb()
//code in urf formate
app.use(express.urlencoded({extended:false}))
//for file uploade
app.use(fileUpload({useTempFiles:true}))
//router loan
app.use('/',web)

//ejs setup
app.set('view engine', 'ejs')
//public folder setup
app.use(express.static('public'))


//server create
app.listen(port, () => {
    console.log(`Express server start localhost:3000`)
  })