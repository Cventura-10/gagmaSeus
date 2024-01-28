// backend/models/Transaction.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  // Define your transaction fields here
  // For example:
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  // ...other fields
}, {
  timestamps: true,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
