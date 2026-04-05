const express = require("express");
const router = express.Router();
const User = require("../models/User");


//  REGISTER Function to add new user 
router.post("/register", async (req, res) => {
    const { fullName, address, gender, email, password } = req.body;

    const user = new User({
        fullName,
        address,
        gender,
        email,
        password
    });

    await user.save();
    res.send("User Registered Successfully");
});


//  LOGIN (name + password)
router.post("/login", async (req, res) => {
    const { fullName, password } = req.body;

    const user = await User.findOne({ fullName, password });

    if (user) {
        res.send("Login Success");
    } else {
        res.send("Invalid Credentials");
    }
});

module.exports = router;