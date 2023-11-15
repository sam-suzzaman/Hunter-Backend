const UserModel = require("../Model/UserModel");
const createError = require("http-errors");
const mongoose = require("mongoose");

exports.getAllUser = async (req, res, next) => {
    try {
        const result = await UserModel.find({}).select("-_id");
        if (result.length !== 0) {
            res.status(200).json({
                status: true,
                result,
            });
        } else {
            next(createError(500, "User list is empty"));
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};

exports.getMe = async (req, res, next) => {
    res.send("get me");
};
exports.getSingleUser = async (req, res, next) => {
    res.send("get single user");
};

exports.addUser = async (req, res, next) => {
    const data = req.body;
    try {
        const isPeopleExist = await UserModel.findOne({ email: data.email });
        if (isPeopleExist) {
            next(createError(500, "Email Already exists"));
        } else {
            const isFirstUser = (await UserModel.countDocuments()) === 0;
            req.body.role = isFirstUser ? "admin" : "user";
            const newUser = new UserModel(data);
            const result = await newUser.save();
            // const tokenObj = { ID: result._id, email: result.email };
            // const TOKEN = JWTGenerator(tokenObj, "1d");
            res.status(200).json({
                status: true,
                message: "Registered Successfully",
                result,
                // TOKEN,
            });
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};

exports.updateUser = async (req, res, next) => {
    res.send("user updated");
};

exports.deleteUser = async (req, res, next) => {
    res.send("user deleted");
};

exports.deleteAllUser = async (req, res, next) => {
    res.send("user all deleted");
};
