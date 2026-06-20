const express = require("express");
const { allProductsController, byIdProductsController } = require("../controller/productsController");

const productsRoute = express.Router();

productsRoute.get("/products", allProductsController)

productsRoute.get("/products/:product_id", byIdProductsController)


module.exports = productsRoute