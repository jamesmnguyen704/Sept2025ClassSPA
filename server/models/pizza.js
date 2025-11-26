// Import mongoose library to interact with MongoDB database
import mongoose from "mongoose";

// Define the structure/schema for a Pizza document in MongoDB
// This acts as a blueprint for what data a pizza order should contain
const pizzaSchema = new mongoose.Schema({
  // Customer name field
  customer: {
    type: String,                          // Must be text
    required: true,                        // This field is mandatory
    validate: /^[A-Za-z0-9 ]*$/           // Only allows letters, numbers, and spaces (no special characters)
  },
  // Pizza crust type field
  crust: {
    type: String,                          // Must be text
    required: true,                        // This field is mandatory
    enum: ["thin", "chicago", "deep-dish", "hella-thick"]  // Only these exact values are allowed
  },
  // Cheese type field
  cheese: {
    type: String,                          // Must be text
    validate: /^[A-Za-z0-9 ]*$/           // Only allows letters, numbers, and spaces
    // Note: Not required, so customer can order without cheese
  },
  // Pizza sauce field
  sauce: {
    type: String,                          // Must be text
    required: true,                        // This field is mandatory
    validate: /^[A-Za-z0-9 ]*$/           // Only allows letters, numbers, and spaces
  },
  // Array of pizza toppings
  toppings: [String]                       // An array that holds multiple strings (e.g., ["pepperoni", "mushrooms", "olives"])
});

// Create a Mongoose model from the schema
// This allows us to create, read, update, and delete pizza documents in MongoDB
// The model will create a collection called "pizzas" (mongoose automatically pluralizes)
const Pizza = mongoose.model("Pizza", pizzaSchema);

// Export the Pizza model so it can be used in other files (like app.js or routes)
export default Pizza;