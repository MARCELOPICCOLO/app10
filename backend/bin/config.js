const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


//config cors
var corsOptions = {
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors())
app.use(express.static(__dirname + '/frontend'))


//mongoDB
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/app10",{useCreateIndex: true, useNewUrlParser: true}).then(()=>{
    console.log("mongo conectado")
}).catch((err)=>{
    console.log("erro ao conectar ao mongo "+ err)
})



module.exports = app