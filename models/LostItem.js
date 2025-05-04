const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name:{type: String, required: true},
  description: { type: String, required: true },
  location: { type: String, required: true },
  userEmail: { type: String, required: true },
  imagePath: { type: String, required: true },
  found: { type: Boolean, default: false },
});

module.exports = mongoose.model('LostItem', lostItemSchema); 