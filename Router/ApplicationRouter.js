const express = require("express");
const ApplicationRouter = express.Router();

const {
    authenticateUser,
} = require("./../Middleware/UserAuthenticationMiddleware");

// Controllers
const ApplicationController = require("../Controller/ApplicationController");

// Middlewares
const { checkInput } = require("../Validation/ApplicationDataRules");
const {
    inputValidationMiddleware,
} = require("../Validation/ValidationMiddleware");

// Authentication routes
ApplicationRouter.get(
    "/applicant-jobs",
    authenticateUser,
    ApplicationController.getCandidateAppliedJobs
);
ApplicationRouter.post(
    "/apply",
    checkInput,
    inputValidationMiddleware,
    ApplicationController.applyInJob
);

ApplicationRouter.get(
    "/recruiter-jobs",
    authenticateUser,
    ApplicationController.getRecruiterPostJobs
);

ApplicationRouter.patch(
    "/:id",
    authenticateUser,
    ApplicationController.updateJobStatus
);
// ApplicationRouter.get("/stats", authenticateUser, AdminController.monthlyInfo);

module.exports = ApplicationRouter;
