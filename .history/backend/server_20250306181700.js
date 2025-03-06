const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/db');
const authRoutes = require('./src/routes/auth');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);


const PORT = 5000;
mongoose
  .connect("yourMongoDBConnectionString")
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));