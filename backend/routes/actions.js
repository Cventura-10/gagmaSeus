// backend/routes/actions.js
const router = require('express').Router();
let Action = require('../models/Action');

// GET endpoint for listing actions
router.route('/').get((req, res) => {
  Action.find()
    .then(actions => res.json(actions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Export the router
module.exports = router;
