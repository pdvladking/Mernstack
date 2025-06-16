const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "User creation failed" });
  }
});

module.exports = router;