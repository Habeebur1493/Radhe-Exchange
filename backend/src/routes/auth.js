const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust path if needed
const router = express.Router(); // <-- Define router here

// Login Route
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(`🔍 Attempting login for: ${username}`);

        // Find user in DB
        const user = await User.findOne({ username });
        if (!user) {
            console.log("❌ User not found");
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(`🔍 Password Match: ${isMatch}`);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Generate JWT Token
        const token = jwt.sign({ userId: user._id }, "yourSecretKey", { expiresIn: "1h" });

        // Set token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
        });

        res.json({ message: "Login successful!", token });
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router; // <-- Export router
