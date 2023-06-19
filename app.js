require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 
const app = express()
//testes
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(console.log("conected"))

// it finaly worked when you start the  06/09 don't miss with it please leave it as it is if possible 

app.get("/", (req, res)=>{
    res.json({response: "server is hearing you ..."})
})

app.listen(process.env.PORT, ()=>{
    console.log('listening to port: ' + process.env.PORT )
})