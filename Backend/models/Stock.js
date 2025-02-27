const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    symbol: String,
    name: String,
    price: Number,
    change: Number,
    volume: Number,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Stock", StockSchema);
