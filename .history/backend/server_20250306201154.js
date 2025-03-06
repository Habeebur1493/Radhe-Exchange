const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const connectDB = require('./src/db/db'); // Import the connectDB function
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./src/routes/auth');
app.use('/api/auth', authRoutes);

const PORT = 5000;

// Start server after successful DB connection
mongoose.connection.once("open", () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB Connection Error:", err);
});
