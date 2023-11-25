const UserModel = require("../Model/UserModel");
const JobModel = require("../Model/JobModel");

exports.getAllInfo = async (req, res, next) => {
    try {
        const users = await UserModel.find({});
        const admin = await UserModel.find({ role: "admin" });
        const jobs = await JobModel.find({});

        res.status(200).json({
            user: users?.length,
            job: jobs?.length,
            admin: admin?.length,
        });
    } catch (error) {
        next(createError(500, error.message));
    }
};
