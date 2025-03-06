const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const connectDB = require('./src/db/db');
const authRoutes = require('./src/routes/auth');
require('dotenv').config();

const app = express();
const connectDB = async () => {
  try {
      if (!process.env.MONGO_URI) {
          throw new Error("MONGO_URI is not defined in .env file");
      }

      await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });

      console.log("Connected to database");
  } catch (error) {
      console.error("Database Connection Error:", error.message);
      process.exit(1);
  }
};

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);


const PORT = 5000;
mongoose.connect(process.env.MONGO_URI)

  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));