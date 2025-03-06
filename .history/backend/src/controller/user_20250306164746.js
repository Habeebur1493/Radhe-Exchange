const mongoose = require("../db/db"); // Import DB connection
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

// Function to create default user if not exists
async function createDefaultUser() {
    const existingUser = await User.findOne({ username: "admin" });
    if (!existingUser) {
        const hashedPassword = await bcrypt.hash("admin123", 10); // Hash password
        await User.create({ username: "admin", password: hashedPassword });
        console.log("Default admin user created");
    }
}

createDefaultUser(); // Run at startup

module.exports = User;
