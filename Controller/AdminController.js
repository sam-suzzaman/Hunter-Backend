const UserModel = require("../Model/UserModel");
const JobModel = require("../Model/JobModel");

exports.getAllInfo = async (req, res, next) => {
    try {
        const users = await UserModel.find({});
        const admin = await UserModel.find({ role: "admin" });
        const jobs = await JobModel.find({});

        const interviewJobs = await JobModel.find({ jobStatus: "interview" });
        const pendingJobs = await JobModel.find({ jobStatus: "pending" });
        const declinedJobs = await JobModel.find({ jobStatus: "declined" });

        res.status(200).json({
            user: users?.length,
            job: jobs?.length,
            admin: admin?.length,
            inverview: interviewJobs?.length,
            pending: pendingJobs?.length,
            declined: declinedJobs?.length,
        });
    } catch (error) {
        next(createError(500, error.message));
    }
};
