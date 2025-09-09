import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// Handle both `.env` and a temporarily renamed `env`
if (!process.env.API_KEY && process.env.API_KEY) {
  // allow legacy var name from your uploaded `env`
  process.env.API_KEY = process.env.API_KEY;
}

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const app = express();

// Make Express find views whether they’re in root, /views, or /views/weather
app.set("view engine", "ejs");
app.set("views", [
  process.cwd(),
  path.join(process.cwd(), "views"),
  path.join(process.cwd(), "views", "weather"),
  path.join(dirName),
]);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/weather/show", async (req, res) => {
  try {
    const zip = req.body?.zip || "";
    //check if the zipcode is valid
    if (!zip || !/^\d{5}$/.test(zip)) {
      return res.status(400).render("index", {
        error: "Please enter a valid 5-digit US ZIP code.",
        zip,
      });
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return res.status(500).render("index", {
        error: "Missing API key. Add API_KEY to your .env file.",
        zip,
      });
    }

    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.set("zip", `${zip},us`);
    url.searchParams.set("units", "imperial");
    url.searchParams.set("appid", apiKey);

    const resp = await fetch(url);
    const data = await resp.json();
    const city = data?.name ?? "Unknown";
    const temp = Math.round(data?.main?.temp ?? 0).toString();
    const desc = data?.weather?.[0]?.description ?? "N/A";

    // Redirect with minimal weather data in the query string
    const q = new URLSearchParams({ city, temp, desc });
    res.redirect(`/weather/show?${q.toString()}`);
  } catch (err) {
    console.error("POST /weather error:", err);
    res.status(500).render("index", {
      error: "Something went wrong. Try again.",
      zip: req.body?.zip || "",
    });
  }
});

app.get("/weather/show", (req, res) => {
  const { city, temp, desc } = req.query;
  // Works whether show.ejs is in root or in /views/weather
  res.render("show", { city, temp, desc });
});

app.listen(3000, () => {
  console.log("Listening on 3000...");
});
