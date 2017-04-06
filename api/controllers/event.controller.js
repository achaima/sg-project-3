var request = require('request');
var eventful = require('../config/eventful');

console.log('event.controller: eventful:', eventful);

function findEvents(req, res) {
  var location = req.query.location;
  // sample URL to search by location:
  // http://api.eventful.com/rest/events/search?app_key=YOUR_API_KEY&location=London&date=Future
  var url = `${eventful.EVENTFUL_BASE_URL}/events/search?app_key=${eventful.EVENTFUL_API_KEY}&location=${location}&date=Future`;

  request(url, (error, response, body) => {
    var eventsJson;

    if (error) {
      console.warn('findEvents: could not get events:', error);
      res.status(500).json({message: 'could not get events'});
      return;
    }
    eventsJson = JSON.parse(body);
    console.log('eventsSearchResults:', eventsJson);
    res.status(200).json(eventsJson.events.event);
  });
}

module.exports = {
  find: findEvents
};
