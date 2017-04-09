var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  firebaseUserId: {
    type: String
  },
  name: {
    type: String
  },
  eventSaved: []
});

module.exports = mongoose.model('User', UserSchema);
