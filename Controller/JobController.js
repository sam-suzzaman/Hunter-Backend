const JobModel = require("../Model/JobModel");
const createError = require("http-errors");
const mongoose = require("mongoose");

module.exports.getAllJobs = async (req, res, next) => {
    try {
        const filters = { ...req.query }; // to make a copy so that original don't moidfied

        // exclude
        const excludeFields = ["sort", "page", "limit", "fields"];
        excludeFields.forEach((field) => delete filters[field]);

        const queries = {};

        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            queries.sortBy = sortBy;
        }

        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            queries.fields = fields;
        }
        if (req.query.limit) {
            const limit = req.query.limit.split(",").join(" ");
            queries.limit = limit;
        }

        const result = await getData(filters, queries);

        if (result.length !== 0) {
            res.status(200).json({
                status: true,
                result,
            });
        } else {
            next(createError(500, "Job List is empty"));
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};

const getData = async (filters, queries) => {
    let sortCriteria = {};

    if (queries.sortBy) {
        switch (queries.sortBy) {
            case "newest":
                sortCriteria = { createdAt: -1 };
                break;
            case "oldest":
                sortCriteria = { createdAt: 1 };
                break;
            case "a-z":
                sortCriteria = { position: 1 };
                break;
            case "z-a":
                sortCriteria = { position: -1 };
                break;
            default:
                // Default sorting criteria if none of the options match
                sortCriteria = { createdAt: -1 };
                break;
        }
    } else {
        // Default sorting criteria if sortBy parameter is not provided
        sortCriteria = { createdAt: -1 };
    }

    const result = await JobModel.find(filters)
        .sort(sortCriteria)
        .select(queries.fields)
        .limit(queries.limit);
    return result;
};

module.exports.getSingleJob = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            next(createError(400, "Invalid Job ID format"));
        }
        const result = await JobModel.findById(id);
        if (!result) {
            next(createError(500, "Job not found"));
        } else {
            res.status(200).json({
                status: true,
                result,
            });
        }
    } catch (error) {
        next(createError(500, `something wrong: ${error.message}`));
    }
};

module.exports.addJob = async (req, res, next) => {
    const jobData = req.body;

    try {
        const isJobExists = await JobModel.findOne({
            company: jobData.comapny,
        });
        if (isJobExists) {
            next(createError(500, "Job data already exist"));
        } else {
            jobData.createdBy = req.user._id;
            const newJob = new JobModel(jobData);
            const result = await newJob.save();

            res.status(201).json({
                status: true,
                result,
            });
        }
    } catch (error) {
        next(createError(500, `something wrong: ${error.message}`));
    }
};

module.exports.updateSingleJob = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            next(createError(400, "Invalid Job ID format"));
        }

        const isJobExists = await JobModel.findOne({ _id: id });
        if (!isJobExists) {
            next(createError(500, "Job not found"));
        } else {
            const updatedJob = await JobModel.findByIdAndUpdate(id, data, {
                new: true,
            });
            res.status(200).json({
                status: true,
                message: "Job Updated",
                result: updatedJob,
            });
        }
    } catch (error) {
        next(createError(500, `something wrong: ${error.message}`));
    }
};

module.exports.deleteSingleJob = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            next(createError(400, "Invalid Job ID format"));
        }

        const isJobExists = await JobModel.findOne({ _id: id });
        if (!isJobExists) {
            res.status(500).json({
                status: false,
                message: "Job not found",
            });
        } else {
            const result = await JobModel.findByIdAndDelete(id);
            res.status(200).json({
                status: true,
                message: "Job Deleted",
                result,
            });
        }
    } catch (error) {
        next(createError(500, `something wrong: ${error.message}`));
    }
};

module.exports.deleteAllJobs = async (req, res, next) => {
    try {
        result = await JobModel.deleteMany({});
        res.status(201).json({
            status: true,
            result,
        });
    } catch (error) {
        next(createError(500, `something wrong: ${error.message}`));
    }
};
