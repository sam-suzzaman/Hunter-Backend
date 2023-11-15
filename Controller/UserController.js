const UserModel = require("../Model/UserModel");
const createError = require("http-errors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWTGenerator = require("../Utils/JWTGenerator");

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
        const isUserExists = await UserModel.findOne({ email: data.email });
        if (isUserExists) {
            next(createError(500, "Email Already exists"));
        } else {
            const isFirstUser = (await UserModel.countDocuments()) === 0;
            req.body.role = isFirstUser ? "admin" : "user";
            const newUser = new UserModel(data);
            const result = await newUser.save();

            // Exclude(remove) password field from the result
            // const { password, ...resultWithoutPassword } = result.toObject();

            // const tokenObj = { ID: result._id, email: result.email };
            // const TOKEN = JWTGenerator(tokenObj, "1d");
            res.status(200).json({
                status: true,
                message: "Registered Successfully",
                // result: resultWithoutPassword,
                // TOKEN,
            });
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};

exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const isUserExists = await UserModel.findOne({ email });
        if (isUserExists) {
            const isPasswordMatched = await bcrypt.compare(
                password,
                isUserExists.password
            );
            if (isPasswordMatched) {
                const tokenObj = {
                    ID: isUserExists._id,
                    role: isUserExists.role,
                };
                const TOKEN = JWTGenerator(tokenObj);

                const one_day = 1000 * 60 * 60 * 24; //since token expire in 1day

                res.cookies(process.env.COOKIE_NAME, TOKEN, {
                    maxAge: one_day, //expire time of cookie
                    httpOnly: true,
                    signed: true, //to keep secure
                });
                res.status(200).json({
                    status: true,
                    message: "Login Successfully",
                });
            } else {
                next(createError(500, "Email or Password not matched"));
            }
        } else {
            next(createError(500, "User not found!!!"));
        }
    } catch (error) {
        next(createError(500, `something wrong: ${error.message}`));
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
