const express = require("express");
const UserRouter = express.Router(); // create a router
const {
    authenticateUser,
} = require("./../Middleware/UserAuthenticationMiddleware");

// Controllers
const UserController = require("../Controller/UserController");

const {
    checkRegisterInput,
    checkLoginInput,
    checkUserUpdateInput,
} = require("../Validation/UserDataRules");

const {
    inputValidationMiddleware,
} = require("../Validation/ValidationMiddleware");

// Routes

UserRouter.route("/")
    .get(UserController.getAllUser)
    .patch(UserController.updateUser)
    .delete(UserController.deleteAllUser);

UserRouter.route("/:id")
    .get(UserController.getSingleUser)
    .delete(UserController.deleteUser);

module.exports = UserRouter;

// Extra----------------------------
// UserRouter.get("/", JobController.getAllJobs); //Get all jobs
// UserRouter.post("/", JobController.addJob); //Add all jobs
// UserRouter.get("/:id", JobController.getSingleJob); //Get Single all jobs
