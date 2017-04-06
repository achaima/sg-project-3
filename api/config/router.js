var express = require('express');
var router = express.Router();
var eventController = require('../controllers/event.controller');

router.get('/api/events/find', eventController.find);

module.exports = router;
