var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
  firebaseUserId: {
    type: String
  },
  events: []
});
module.exports = mongoose.model('User', UserSchema);
