const mongoose = require("mongoose");

const user = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a Student name"],
        },
        email: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: Number,
            required: true,
        },
        // file: {
        //     type: Blob,
        //     required: false,
        // },
    },
    {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    }
);

const User = mongoose.model("User", user);
module.exports = User;