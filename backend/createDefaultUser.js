const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./src/models/User"); // Ensure correct path to User model
const connectDB = require("./src/db/db"); // Ensure correct path to DB connection

const createDefaultUser = async () => {
    try {
        await connectDB(); // Connect to the database

        const username = "admin";
        const plainPassword = "admin@1234"; // Set the new password
        const saltRounds = 10;

        // Delete existing admin user (force update)
        await User.deleteOne({ username });
        console.log("🗑️ Deleted old admin user (if existed)");

        // Hash new password
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

        // Create a new admin user
        const newUser = new User({
            username,
            password: hashedPassword,
        });

        await newUser.save();
        console.log("✅ Default admin user created successfully");

        mongoose.connection.close(); // Close DB connection
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

// Run the function
createDefaultUser();
