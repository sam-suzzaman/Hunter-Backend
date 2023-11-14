const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1 align='center'>--- Hunter Server is Alive ---</h1>");
});

module.exports = app;
