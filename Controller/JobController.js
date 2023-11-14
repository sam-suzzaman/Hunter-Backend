const JobModel = require("../Model/JobModel");
const createError = require("http-errors");

module.exports.getAllJobs = async (req, res, next) => {
    try {
        const result = await JobModel.find({});
        res.status(200).json({
            status: true,
            result,
        });
    } catch (error) {
        next(createError(500, error.message));
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

module.exports.getSingleJob = (req, res) => {
    const { id } = req.params;
    console.log(id);
    // const job = jobs.find((job) => job._id === id);
    // if (!job) {
    //     res.status(404).json({ message: "Job not found" });
    //     return;
    // }
    res.status(200).json({ message: "Single Job" });
};

module.exports.updateSingleJob = (req, res) => {
    const { id } = req.params;
    console.log(id);
    // const job = jobs.find((job) => job._id === id);
    // if (!job) {
    //     res.status(404).json({ message: "Job not found" });
    //     return;
    // }
    res.status(200).json({ message: "Single Job updated" });
};

module.exports.deleteSingleJob = (req, res) => {
    const { id } = req.params;
    console.log(id);
    // const job = jobs.find((job) => job._id === id);
    // if (!job) {
    //     res.status(404).json({ message: "Job not found" });
    //     return;
    // }
    res.status(200).json({ message: "Single Job deleted" });
};
