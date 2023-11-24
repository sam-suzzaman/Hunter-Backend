const UserModel = require("../Model/UserModel");
const JobModel = require("../Model/JobModel");

exports.getAllInfo = async (req, res, next) => {
    try {
        const users = await UserModel.find({});
        const jobs = await JobModel.find({});
        const info = {
            user: users?.length,
            job: jobs?.length,
        };

        res.status(200).json({
            user: users?.length,
            job: jobs?.length,
        });
    } catch (error) {
        next(createError(500, error.message));
    }
};
