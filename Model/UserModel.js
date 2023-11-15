const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstname: String,
        email: String,
        password: String,
        lastname: {
            type: String,
            default: "",
        },
        location: {
            type: String,
            required: [true, "User Location is required"],
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
    },
    { timestamps: true } // to keep track
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
