const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const savedRoutes = require('./routes/saved');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/dashmetrics', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/saved', savedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));