const express = require("express");
const AdminRouter = express.Router(); // create a router
const {
    authenticateUser,
} = require("./../Middleware/UserAuthenticationMiddleware");

// Controllers
const AdminController = require("../Controller/AdminController");

// Authentication routes
AdminRouter.get("/info", authenticateUser, AdminController.getAllInfo);
AdminRouter.get("/stats", authenticateUser, AdminController.monthlyInfo);

module.exports = AdminRouter;
