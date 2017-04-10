var User = require('../models/user-model.js');

function createUser(req, res) {
  var user = new User();
  console.log('Created user with a firebase id');
  user.firebaseUserId = req.headers.firebaseuserid;
  console.log('HEADERS:', req.headers);
  user.save(function(error) {
    if (error) return res.json(error);
    res.json({user: user});
  });
}


function getUser(req, res) {
  var firebaseUserId = req.params.firebaseUserId;
  User.findOne({ firebaseUserId: firebaseUserId }, function(error, user) {
    if (error) return res.json(error);
    res.json({ user: user });
  });
}


function getSavedEvents(req, res) {
  var firebaseUserId = req.params.firebaseUserId;
  User.findOne({ firebaseUserId: firebaseUserId }, function(error, user) {
    if(error) return res.json(error);
    res.json({ savedEvents: user.events });
  });
}

function updateUsersEvents(req, res) {
  var firebaseUserId = req.params.firebaseUserId;
  var updatedUserEvents = req.body;
  console.log('req.body@@@@@@@@@@@@@@', req.body);
  User.findOne({ firebaseUserId: firebaseUserId }, function(error, user) {
    if(error) return res.json(error);
    user.events = updatedUserEvents;
    user.save(function(error) {
      if (error) return res.json(error);
      res.json({ message: 'updated event list' });
    });
  });
}


module.exports = {
  createUser: createUser,
  getUser: getUser,
  getSavedEvents: getSavedEvents,
  updateUsersEvents: updateUsersEvents
};
