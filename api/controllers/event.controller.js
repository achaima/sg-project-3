var request = require('request');
var eventful = require('../config/eventful');

console.log('event.controller: eventful:', eventful);

function findEvents(req, res) {
  var location = req.query.location;
  console.log('findEvents(): location:', location);
  // TODO: here is where we will call the external API instead of returning hard-coded data:
  res.json([
    { name: 'The Holi Festival' },
    { name: 'Mo\'s Comedy Show' }
  ]);
}

module.exports = {
  find: findEvents
};
