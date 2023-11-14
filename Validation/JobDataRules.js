const { check } = require("express-validator");
const { JOB_TYPE, JOB_STATUS } = require("../Utils/JobConstants");

exports.checkJobInput = [
    check("company").trim().notEmpty().withMessage("Job must have a Company"),
    check("position").trim().notEmpty().withMessage("Job must have a Position"),
    check("jobLocation")
        .trim()
        .notEmpty()
        .withMessage("Job location is required"),
    check("jobStatus")
        .isIn(Object.values(JOB_STATUS))
        .withMessage("Invalid job status"),
    check("jobType")
        .isIn(Object.values(JOB_TYPE))
        .withMessage("Invalid job type"),
];
