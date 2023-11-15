const UserModel = require("../Model/UserModel");
const createError = require("http-errors");
const mongoose = require("mongoose");

exports.getAllUser = async (req, res, next) => {
    res.send("all users");
};

exports.getMe = async (req, res, next) => {
    res.send("get me");
};
exports.getSingleUser = async (req, res, next) => {
    res.send("get single user");
};

exports.addUser = async (req, res, next) => {
    res.send("user added");
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
