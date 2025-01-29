const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  followers: Number,
  engagement: Number,
  growth: Number,
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);