const express = require("express");
const UserRouter = express.Router(); // create a router

// Controllers
const UserController = require("../Controller/UserController");
// const { checkJobInput } = require("../Validation/JobDataRules");
// const {
//     inputValidationMiddleware,
// } = require("../Validation/ValidationMiddleware");

// Routes
UserRouter.route("/")
    .get(UserController.getAllUser)
    .post(UserController.addUser)
    .delete(UserController.deleteAllUser);

UserRouter.route("/:id")
    .get(UserController.getSingleUser)
    .patch(UserController.updateUser)
    .delete(UserController.deleteUser);

UserRouter.route("/me/:id").get(UserController.getMe);

module.exports = UserRouter;

// Extra----------------------------
// UserRouter.get("/", JobController.getAllJobs); //Get all jobs
// UserRouter.post("/", JobController.addJob); //Add all jobs
// UserRouter.get("/:id", JobController.getSingleJob); //Get Single all jobs
