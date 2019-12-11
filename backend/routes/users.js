const router = require('express').Router();
// mongoose user model
let User = require('../models/user.model');

// @route   GET users/
// @desc    users route
// @access  Public
router.route('/').get((req, res) => {
  User.find()
    // get all users from server
    .then(users => res.json(users))
    // display errors if any
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route   GET users/add
// @desc    add user route
// @access  Public
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
