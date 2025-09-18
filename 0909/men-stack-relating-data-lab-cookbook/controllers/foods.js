const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// INDEX - list pantry
router.get("/", async (req, res) => {
  try {
    const owner = await User.findById(req.params.userId);
    res.render("foods/index.ejs", { owner, pantry: owner.pantry });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// NEW - show form
router.get("/new", (req, res) => {
  res.render("foods/new.ejs", { ownerId: req.params.userId });
});

// CREATE - add item
router.post("/", async (req, res) => {
  try {
    const owner = await User.findById(req.params.userId);
    owner.pantry.push(req.body); // expects { name: '...' }
    await owner.save();
    res.redirect(`/users/${owner._id}/foods`);
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// EDIT - form
router.get("/:itemId/edit", async (req, res) => {
  try {
    const owner = await User.findById(req.params.userId);
    const food = owner.pantry.id(req.params.itemId);
    res.render("foods/edit.ejs", { owner, food });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// UPDATE - save edits
router.put("/:itemId", async (req, res) => {
  try {
    const owner = await User.findById(req.params.userId);
    owner.pantry.id(req.params.itemId).set(req.body);
    await owner.save();
    res.redirect(`/users/${owner._id}/foods`);
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// DELETE - remove item
router.delete("/:itemId", async (req, res) => {
  try {
    const owner = await User.findById(req.params.userId);
    owner.pantry.id(req.params.itemId).deleteOne();
    await owner.save();
    res.redirect(`/users/${owner._id}/foods`);
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

module.exports = router;
