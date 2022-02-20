const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// const productsController = require("./controllers/product.controller");
// const usersController = require("./controllers/user.controller");
const flatRoute = require("./routes/flatRoute");

const app = express();
app.use(cors());

app.use(express.json());

// app.use("/products",productsController);
// app.use("/users",usersController);
app.use("/", flatRoute);

module.exports = app;
