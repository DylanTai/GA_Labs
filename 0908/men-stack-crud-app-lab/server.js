import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// for PUT/DELETE via plain HTML forms
import methodOverride from "method-override";
import Plant from "./models/plant.js";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", function (_req, res) {
  try {
    res.redirect("/plants");
  } catch (err) {
    console.error("redirect failed:", err);
    res.status(500).send("oops");
  }
});

// GET 	/plants 	Index 	Displays a list of all plants
app.get("/plants", async (req, res) => {
  try {
    const plants = await Plant.find().sort({ createdAt: -1 });
    res.render("index", { plants });
  } catch (err) {
    console.error("GET /plants error:", err);
    res.status(500).send("couldn't load plants");
  }
});

// GET 	/plants/new 	New 	Shows a form to create a new plant
app.get("/plants/new", (_req, res) => {
  try {
    res.render("new");
  } catch (err) {
    console.error("render new failed:", err);
  }
});

// POST 	/plants 	Create 	Creates a new plant
app.post("/plants", async (req, res) => {
  try {
    await Plant.create(req.body);
    res.redirect("/plants");
  } catch (err) {
    console.error("POST /plants error:", err);
  }
});

// GET 	/plants/:id 	Show 	Displays a specific plant by its ID
app.get("/plants/:id", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    res.render("show", { plant });
  } catch (err) {
    console.error("GET /plants/:id error:", err);
  }
});

// GET 	/plants/:id/edit 	Edit 	Shows a form to edit an existing plant
app.get("/plants/:id/edit", async function (req, res) {
  try {
    const { id } = req.params;
    const plant = await Plant.findById(id);
    res.render("edit", { plant });
  } catch (err) {
    console.error("GET /plants/:id/edit error:", err);
  }
});

// PUT 	/plants/:id 	Update 	Updates a specific plant by its ID
app.put("/plants/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Plant.findByIdAndUpdate(id, req.body);
    res.redirect(`/plants/${id}`);
  } catch (err) {
    console.error("PUT /plants/:id error:", err);
  }
});

// DELETE 	/plants/:id 	Destroy 	Deletes a specific plant by its ID
app.delete("/plants/:id", async (req, res) => {
  try {
    await Plant.findByIdAndDelete(req.params.id);
    res.redirect("/plants");
  } catch (err) {
    console.error("DELETE /plants/:id error:", err);
  }
});

app.listen(3000);
