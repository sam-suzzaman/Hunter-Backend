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

// Get All Jobs
app.get("/api/v1/jobs", (req, res) => {
    res.status(200).json({ jobs });
});

// Create A Job
app.post("/api/v1/jobs", (req, res) => {
    const { company, position } = req.body;

    if (!company || !position) {
        res.status(400).json({ message: "Provide comapny and position" });
        return;
    }

    const job = { _id: nanoid(), company, position };
    jobs.push(job);
    res.status(200).json({ message: "Job added", job });
});

module.exports = app;
