const app = require("./src/app")
const connect = require("./src/db/db")

const express = require("express");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from backend!");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

connect();

