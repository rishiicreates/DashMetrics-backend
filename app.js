require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./server/routes/auth');
const analyticsRoutes = require('./server/routes/analytics');
const savedRoutes = require('./server/routes/saved');

const app = express();

// Middleware
app.use(express.json());

// Debugging: Check if MONGO_URI is loaded correctly
console.log("MongoDB URI:", process.env.MONGO_URI);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/saved', savedRoutes);

// Server setup
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});