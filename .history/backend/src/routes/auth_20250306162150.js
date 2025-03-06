const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// Default User (Change this as needed)
const defaultUser = {
    username: "admin",
    password: "admin123", // Store hashed version in production
};

// Login Route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Check if username matches the default
    if (username !== defaultUser.username) {
        return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare passwords (hash it in a real app)
    if (password !== defaultUser.password) {
        return res.status(400).json({ message: "Invalid username or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
});

module.exports = router;
