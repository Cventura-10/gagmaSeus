// backend/routes/transactions.js
const router = require('express').Router();
let Transaction = require('../models/Transaction');

// GET endpoint for listing transactions
router.route('/').get((req, res) => {
  Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST endpoint for creating a new transaction
router.route('/add').post((req, res) => {
  const newTransaction = new Transaction({
    // ...populate the transaction fields from the request body
  });

  newTransaction.save()
    .then(() => res.json('Transaction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// ... Other CRUD operations

module.exports = router;
