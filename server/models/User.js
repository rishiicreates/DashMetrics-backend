const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  socialAccounts: {
    twitter: String,
    instagram: String,
  },
});

module.exports = mongoose.model('User', UserSchema);