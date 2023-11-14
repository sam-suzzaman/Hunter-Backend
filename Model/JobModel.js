const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            requried: [true, "A Company name is requried"],
            trim: true,
            minLength: [5, "Company name is too short"],
            maxLength: [100, "Company name is too long"],
        },
        jobTitle: {
            type: String,
            required: [true, "Job Must have a title"],
            trim: true,
            minLength: [5, "Job title is too short"],
            maxLength: [200, "Job title is too long"],
        },
        position: {
            type: String,
            requried: [true, "Job must have a Position"],
            trim: true,
            minLength: [5, "Company name is too short"],
            maxLength: [200, "Company name is too long"],
        },
        jobStatus: {
            type: String,
            enum: ["interview", "declined", "pending"],
            default: "pending",
        },
        jobType: {
            type: String,
            enum: ["office", "remote"],
            required: [true, "Job must have a type(office/remote)"],
        },
        workTime: {
            type: String,
            required: [true, "Job must have a duration(in hr)"],
        },
        jobLocation: {
            type: String,
            required: [true, "Job must have a location"],
        },
    },
    { timestamps: true } // to keep track
);

const JobModel = mongoose.model("Job", JobSchema);
module.exports = JobModel;
