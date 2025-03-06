const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const connectDB = require('./db/db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);   // Use the auth routes

const PORT = 5000;

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;

