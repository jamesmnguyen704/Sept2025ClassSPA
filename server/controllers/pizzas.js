import { Router } from  "express"; // importing express router to create a route
import Pizza from "../models/Pizza.js";  // import pizza model

const router = Router(); // create a mini express application all my pizza routes will go here
// Create pizza route
router.post("/", async (request, response) => { // create a POST route, async, means AWAIT inside function
  try { // to start a try/catch block. anything inside TRY might fail due to validation, missing fields
    const newPizza = new Pizza(request.body);

    const data = await newPizza.save(); // is now the opject of my Pizza Schema, SAVE() validate, run regex
// verify required fields, insert the document into pizza collection. data now contains the full saved documents. 
    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError") return response.status(400).json(error.errors);

    return response.status(500).json(error.errors); // sends the pizza back to client as confirmation. Insomnia will show it and the ID
  } // catch(error), and console.log(error) will print to my terminal for debugging 
});

// Get all pizzas route or READ 
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Pizza.find(query);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single pizza by ID /pizzas/{id} GET
router.get("/:id", async (request, response) => {
  try {
    const data = await Pizza.findById(request.params.id);

    if (data === null) response.status(404).json({ message: "Pizza not found"});

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors)
  }
});

// Delete a pizza by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Pizza.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single pizza by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Pizza.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          crust: body.crust,
          cheese: body.cheese,
          sauce: body.sauce,
          toppings: body.toppings
        }
      },
      {
        new: true, // READ operation and then WRITE operation
        runValidators: true
      }
    );

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ('name' in error && error.name === 'ValidationError') return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;