const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); 
require("dotenv").config();

// Login Route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate Token
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET || "fallbackSecretKey", 
            { expiresIn: "1h" }
        );

        // Send response with token
        res.json({ 
            message: "Login successful!",
            user: { username: user.username }, // Exclude password
            token 
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
