const express = require("express");
const JobRouter = express.Router(); // create a router

// Controllers
const JobController = require("../Controller/JobController");
const { checkJobInput } = require("../Validation/JobDataRules");
const {
    inputValidationMiddleware,
} = require("../Validation/ValidationMiddleware");

const {
    authenticateUser,
} = require("./../Middleware/UserAuthenticationMiddleware");

// Routes
JobRouter.route("/")
    .get(JobController.getAllJobs)
    .post(checkJobInput, inputValidationMiddleware, JobController.addJob)
    .delete(JobController.deleteAllJobs);

JobRouter.get("/my-jobs", authenticateUser, JobController.getMyJobs);

JobRouter.route("/:id")
    .get(JobController.getSingleJob)
    .patch(
        checkJobInput,
        inputValidationMiddleware,
        JobController.updateSingleJob
    )
    .delete(JobController.deleteSingleJob);

module.exports = JobRouter;

// Extra----------------------------
// JobRouter.get("/", JobController.getAllJobs); //Get all jobs
// JobRouter.post("/", JobController.addJob); //Add all jobs
// JobRouter.get("/:id", JobController.getSingleJob); //Get Single all jobs
