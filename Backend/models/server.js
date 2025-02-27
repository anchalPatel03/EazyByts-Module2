require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const stockRoutes = require('./routes/stockRoutes'); // ✅ Corrected path

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Connect to MongoDB
mongoose.connect(MONGO_URI, { authSource: 'admin' })
  .then(() => console.log('✅ MongoDB Connected...'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1); // Exit the app if DB connection fails
  });

// ✅ API Routes
app.use('/api/stocks', stockRoutes);

// ✅ Default Route
app.get('/', (req, res) => {
  res.json({ message: '🚀 Server is running!' });
});

// ✅ 404 Error Handling
app.use((req, res) => {
  res.status(404).json({ error: '❌ Route Not Found' });
});

// ✅ Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
