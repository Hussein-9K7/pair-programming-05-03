const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(` `)
  console.log(`Products API: http://localhost:${PORT}/api/products`);
  console.log(`Users API: http://localhost:${PORT}/api/users`);
});
