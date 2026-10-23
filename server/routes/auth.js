const express = require("express");

const router = express.Router();

const User = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.json({
      message: "Registered"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Registration failed"
    });
  }
});

module.exports = router;