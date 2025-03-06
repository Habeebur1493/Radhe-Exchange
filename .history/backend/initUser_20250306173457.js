const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./src/models/User');
const connectDB = require('./src/db/db');

require('dotenv').config();

const createDefaultUser = async () => {
    await connectDB();

    const existingUser = await User.findOne({ username: process.env.DEFAULT_USERNAME });
    if (!existingUser) {
        const hashedPassword = await bcrypt.hash(process.env.DEFAULT_PASSWORD, 10);
        const newUser = new User({ username: process.env.DEFAULT_USERNAME, password: hashedPassword });
        await newUser.save();
        console.log('Default user created');
    } else {
        console.log('Default user already exists');
    }
    mongoose.connection.close();
};

createDefaultUser();
