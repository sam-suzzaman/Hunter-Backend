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
        jobTime: {
            type: String,
            enum: ["full-time", "part-time", "intern"],
            required: [
                true,
                "Job must have a time duration(full-time/part-time/intern)",
            ],
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

module.exports.JobModel = mongoose.model("Job", JobSchema);
