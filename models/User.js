const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: String,
    address: String,
    gender: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", userSchema);