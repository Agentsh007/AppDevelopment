const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  university: { type: String, default: '' },
  department: { type: String, default: '' },
  bloodGroup: { type: String, default: '' },
  phoneNumber: { type: String, default: '' },
  profilePicture: { type: String, default: '' },
});

module.exports = mongoose.model('User', userSchema);