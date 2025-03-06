const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const User = require("../routes/user");

// Protected Route: Get User Info
router.get("/profile", authenticateToken, async (req, res) => {
    const user = await User.findOne({ username: req.user.username });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ username: user.username });
});

module.exports = router;
