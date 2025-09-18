const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// COMMUNITY INDEX - list all users
router.get("/", async (_req, res) => {
  try {
    const users = await User.find().select("username pantry");
    res.render("users/index.ejs", { users });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// COMMUNITY SHOW - show a user's pantry (read-only)
router.get("/:userId", async (req, res) => {
  try {
    const person = await User.findById(req.params.userId);
    res.render("users/show.ejs", { person });
  } catch (err) {
    console.log(err);
    res.redirect("/users");
  }
});

module.exports = router;
