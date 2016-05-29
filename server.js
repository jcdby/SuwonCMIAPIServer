

// var express = require('express')
// var app = express()
// var router = require('./src//Routers//APIs')

import express from 'express';
import router from './src/Routers/APIs'
let app = express();


//start router
router(app);


//port
app.listen(8990, function () {
  console.log('Example app listening on port 8990!')
})
