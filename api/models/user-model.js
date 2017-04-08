var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  firebaseUserId: String,
  event: [{
    
  }]
});

module.exports = mongoose.model('User', UserSchema);
