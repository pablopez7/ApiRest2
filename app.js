'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Revisar
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Range, Authorization, Content-Type, X-Requested-With, X-API-KEY, Access-Control-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, PATCH')
  res.header('Allow', 'GET, POST, PUT, DELETE, HEAD, PATCH')
  res.header('Access-Control-Expose-Headers', 'Content-Length')

  if (req.method === 'OPTIONS') {
    return res.send(200)
  } else {
    return next()
  }
  
})

app.use('/', api)

module.exports = app