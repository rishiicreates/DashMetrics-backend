const mongoose = require('mongoose');

const SavedContentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  url: String,
  title: String,
  sourcePlatform: String,
});

module.exports = mongoose.model('SavedContent', SavedContentSchema);
