const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");

// Middlewares
app.use(express.json());
app.use(cors());

// Routers
const JobRouter = require("./Router/JobRouter");

// Connecting routes
app.use("/api/v1/Jobs", JobRouter);

module.exports = app;
