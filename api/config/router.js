var express = require('express');
var router = express.Router();
var eventController = require('../controllers/event.controller');
var userController = require('../controllers/user.controller');

router.get('/api/events/find', eventController.find);

router.post('/users', userController.createUser);

module.exports = router;
