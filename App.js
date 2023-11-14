const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

// Middlewares
app.use(express.json());
app.use(cors());

// Create Some Data
let jobs = [
    { _id: nanoid(), company: "Facebook", position: "Frontend" },
    { _id: nanoid(), company: "Twitter", position: "Backend" },
    { _id: nanoid(), company: "Linkedin", position: "Mern-stack" },
];

app.get("/", (req, res) => {
    res.send("<h1 align='center'>--- Hunter Server is Alive ---</h1>");
});

app.get("/api/v1/jobs", (req, res) => {
    res.status(200).json({ jobs });
});

module.exports = app;
