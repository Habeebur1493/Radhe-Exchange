const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./src/models/User'); // Ensure correct path to User model
const connectDB = require('./src/db/db'); // Ensure correct path to DB connection

const createDefaultUser = async () => {
    try {
        await connectDB(); // Connect to the database

        const existingUser = await User.findOne({ username: 'admin' });

        if (!existingUser) {
            const saltRounds = 10; // Number of salt rounds
            const hashedPassword = await bcrypt.hash('admin@1234', saltRounds);

            const newUser = new User({
                username: 'admin',
                password: hashedPassword,
            });

            await newUser.save();
            console.log('✅ Default admin user created');
        } else {
            console.log('ℹ️ Admin user already exists');
        }

        mongoose.connection.close(); // Close the database connection after completion
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

createDefaultUser();
