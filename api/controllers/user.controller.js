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


module.exports = {
  createUser: createUser
};
