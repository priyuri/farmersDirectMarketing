const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/farmers")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test route (optional)
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Server start
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
