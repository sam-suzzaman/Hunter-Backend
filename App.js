const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// Routers
const JobRouter = require("./Router/JobRouter");
const UserRouter = require("./Router/UserRouter");

// Connecting routes
app.use("/api/v1/Jobs", JobRouter);
app.use("/api/v1/Users", UserRouter);
app.use("/api/v1/Auth", UserRouter);

module.exports = app;
