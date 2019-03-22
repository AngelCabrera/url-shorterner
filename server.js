'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const Url = require('./models/Url');
const dns = require('dns')
require('./database-connection');
// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors());
app.use(express.urlencoded({extended: false}));

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

app.use(require('./routes/shorturl'));
  
// your first API endpoint... 

app.listen(port, function () {
  console.log('Node.js listening ...');
});