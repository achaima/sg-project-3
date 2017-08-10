require('dotenv').config();
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./api/config/router');
var eventful = require('./api/config/eventful');
var app = express();
var PORT = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/sg-webdev4-project3';

mongoose.connect(MONGODB_URI, function (err) {
  if (err) {
    console.error('Could not connect to Mongo: err:', err);
    process.exit(1);
  }
  console.log('Connected to database:', mongoose.connection.name);
});

app.use(morgan('dev'));
app.use(express.static('node_modules'));
app.use(express.static('frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, function() {
  console.log('Eventful API key:', eventful.EVENTFUL_API_KEY);
  console.log('App is running on port', PORT);
});

module.exports = app;
