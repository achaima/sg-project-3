var mongoose = require('mongoose');
var EventSchema = mongoose.Schema({
  title: {
    type: String
  },
  image: {
    type: String
  },
  start_time: {
    type: String
  }
});

module.exports = mongoose.model('Event', EventSchema);
