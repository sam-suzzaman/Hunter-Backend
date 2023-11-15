const express = require("express");
const UserRouter = express.Router(); // create a router

// Controllers
const UserController = require("../Controller/UserController");
const { checkRegisterInput } = require("../Validation/UserDataRules");
const {
    inputValidationMiddleware,
} = require("../Validation/ValidationMiddleware");

// Auth routes
UserRouter.post(
    "/register",
    checkRegisterInput,
    inputValidationMiddleware,
    UserController.addUser
);
// UserRouter.post(
//     "/login",
//     checkRegisterInput,
//     inputValidationMiddleware,
//     UserController.addUser
// );
// UserRouter.get("/me", UserController.getMe);

// Users Route
UserRouter.route("/")
    .get(UserController.getAllUser)
    .delete(UserController.deleteAllUser);

UserRouter.route("/:id")
    .get(UserController.getSingleUser)
    .patch(UserController.updateUser)
    .delete(UserController.deleteUser);

// UserRouter.route("/me/:id").get(UserController.getMe);

module.exports = UserRouter;

// Extra----------------------------
// UserRouter.get("/", JobController.getAllJobs); //Get all jobs
// UserRouter.post("/", JobController.addJob); //Add all jobs
// UserRouter.get("/:id", JobController.getSingleJob); //Get Single all jobs
