require("dotenv").config();
const mongoose = require("mongoose");
const prompt = require("prompt-sync")({ sigint: true });
const Customer = require("./models/customer");

// Start
(async function () {
  const uri = process.env.MONGODB_URI;
  await mongoose.connect(uri);

  console.log("Welcome to the CRM\n");

  while (true) {
    showMenu();
    const choice = Number.parseInt(prompt("Number of action to run: "));
    console.log();

    if (choice === 1) await createCustomer();
    else if (choice === 2) await listCustomers();
    else if (choice === 3) await updateCustomer();
    else if (choice === 4) await deleteCustomer();
    else if (choice === 5) break;
    else console.log("Pick a number 1-5.\n");
  }

  console.log("exiting...");
  await mongoose.connection.close().catch(() => {});
  process.exit(0);
})();

function showMenu() {
  console.log(
    `What would you like to do?

  1. Create a customer
  2. View all customers
  3. Update a customer
  4. Delete a customer
  5. Quit
`
  );
}

// Async functions

// Create a new customer
async function createCustomer() {
  const name = prompt("Customer name: ");
  const ageNum = Number.parseInt(prompt("Customer age: "));

  const newCustomer = await Customer.create({ name, age: ageNum });
  console.log(
    `\nCreated: id: ${newCustomer._id} --  Name: ${newCustomer.name}, Age: ${newCustomer.age}\n`
  );
}

// Shows list of all customers
async function listCustomers() {
  const customers = await Customer.find().sort({ createdAt: 1 }).lean();
  if (!customers.length) {
    console.log("No customers found.\n");
    return;
  }
  console.log("Below is a list of customers:\n");
  for (const customer of customers)
    console.log(
      `id: ${customer._id} --  Name: ${customer.name}, Age: ${customer.age}`
    );
  console.log();
}

// Updates a current customer by ID
async function updateCustomer() {
  await listCustomers();
  const id = prompt("Paste the id to update: ");

  let customer = await Customer.findById(id);

  const newName = prompt("New name: ");
  const newAge = Number.parseInt(prompt("New age: "));

  customer.name = newName;
  customer.age = newAge;
  await customer.save();
  console.log("\nCustomer updated.\n");
}

// Deletes a current customer by ID
async function deleteCustomer() {
  await listCustomers();
  const id = String(prompt("Paste the id to delete: "));

  const gone = await Customer.findByIdAndDelete(id);
  console.log("\nCustomer deleted.\n");
}
