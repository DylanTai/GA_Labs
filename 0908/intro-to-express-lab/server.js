// server.js
const express = require("express");
const app = express();

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

// 1.) Be Polite, Greet the User
app.get("/greetings/:username", (req, res) => {
  const username = String(req.params.username);
  res.send(`How's it going, ${username}?`);
});
// End of "1.) Be Polite, Greet the User"

// 2.) Rolling the Dice
app.get("/roll/:number", (req, res) => {
  const max = Number.parseInt(req.params.number);
  console.log(max);
  if (Number.isNaN(max)) res.send("You must specify a number.");
  else {
    const roll = Math.floor(Math.random() * (max + 1)); // 0..max
    res.send(`You rolled a ${roll}`);
  }
});
// End of "2.) Rolling the Dice."

// 3.) I Want THAT One!
app.get("/collectibles/:index", (req, res) => {
  const index = Number.parseInt(req.params.index);
  const item = collectibles[index];
  if (!item) {
    return res.send("This item is not yet in stock. Check back soon!");
  }
  res.send(
    `So, you want the ${item.name}? For ${item.price}, it can be yours!`
  );
});
// End of "3.) I Want THAT One!"

// 4.) Filter Shoes by Query Parameters
app.get("/shoes", (req, res) => {
  const min =
    req.query["min-price"] !== undefined
      ? Number(req.query["min-price"])
      : null;
  const max =
    req.query["max-price"] !== undefined
      ? Number(req.query["max-price"])
      : null;
  const type = req.query.type ? String(req.query.type) : null;

  let list = shoes;
  if (min !== null && !Number.isNaN(min))
    list = list.filter((s) => s.price >= min);
  if (max !== null && !Number.isNaN(max))
    list = list.filter((s) => s.price <= max);
  if (type) list = list.filter((s) => s.type === type);

  res.send(list);
});
// End of "4.) Filter Shoes by Query Parameters"

app.listen(3000);
