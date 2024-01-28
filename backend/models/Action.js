// backend/models/Action.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const actionSchema = new Schema({
  // Define your action fields here, for example:
  name: { type: String, required: true },
  description: { type: String, required: true },
  // ...other fields
}, {
  timestamps: true,
});

const Action = mongoose.model('Action', actionSchema);

module.exports = Action;
