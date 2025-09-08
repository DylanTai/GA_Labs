import dotenv from "dotenv";
import express from "express";
import methodOverride from "method-override";
import mongoose from "mongoose";

import Plant from "./models/plant.js";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (_req, res) => {
  res.redirect("/plants");
});

// Index - Displays a list of all plants
app.get("/plants", async (req, res) => {
  const plants = await Plant.find().sort({ createdAt: -1 });
  res.render("index", { plants });
});

// New - Shows a form to create a new plant
app.get("/plants/new", (_req, res) => {
  res.render("new");
});

// Create - Creates a new plant
app.post("/plants", async (req, res) => {
  await Plant.create(req.body);
  res.redirect("/plants");
});

// Show - Displays a specific plant by its ID
app.get("/plants/:id", async (req, res) => {
  const { id } = req.params;
  const plant = await Plant.findById(id);
  res.render("show", { plant });
});

// Edit - Shows a form to edit an existing plant
app.get("/plants/:id/edit", async function (req, res) {
  const { id } = req.params;
  const plant = await Plant.findById(id);
  res.render("edit", { plant });
});

// Update - Updates a specific plant by its ID
app.put("/plants/:id", async (req, res) => {
  const { id } = req.params;
  await Plant.findByIdAndUpdate(id, req.body);
  res.redirect(`/plants/${id}`);
});

// Destroy - Destroy a specific plant by its OD
app.delete("/plants/:id", async (req, res) => {
  const { id } = req.params;
  await Plant.findByIdAndDelete(id);
  res.redirect("/plants");
});

app.listen(3000);
