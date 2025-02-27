const express = require('express');
const router = express.Router();
const Stock = require('../models/Stock'); // ✅ Import Stock Model

// ✅ GET all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find(); // Fetch stocks from MongoDB

    if (!stocks || stocks.length === 0) {
      return res.status(200).json({ message: '⚠️ No stocks found.' });
    }

    res.status(200).json(stocks); // Send stocks as response
  } catch (error) {
    console.error('❌ Error fetching stocks:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

module.exports = router;
