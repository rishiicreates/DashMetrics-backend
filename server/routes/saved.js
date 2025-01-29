const express = require('express');
const router = express.Router();
const SavedContent = require('../models/SavedContent');

router.get('/', async (req, res) => {
  const { search } = req.query;
  const content = await SavedContent.find({ title: { $regex: search, $options: 'i' } });
  res.json(content);
});

module.exports = router;