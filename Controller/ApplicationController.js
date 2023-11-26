const ApplicationModel = require("../Model/ApplicationModel");
const mongoose = require("mongoose");
const createError = require("http-errors");

const day = require("dayjs");

exports.testing = async (req, res, next) => {
    try {
        res.status(200).json({
            status: "Ok",
        });
    } catch (error) {
        next(createError(500, error.message));
    }
};

exports.applyInJob = async (req, res, next) => {
    try {
        const alreadyApplied = await ApplicationModel.findOne({
            applicantId: req.body.applicantId,
            recruiterId: req.body.recruiterId,
        });

        if (alreadyApplied) {
            next(createError(500, "Already Applied"));
        } else {
            const applied = new ApplicationModel(req.body);
            const result = await applied.save();
            res.status(201).json({
                status: true,
                message: "Applied Successfully",
            });
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};
