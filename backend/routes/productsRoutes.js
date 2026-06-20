const express = require("express");
const { allProductsController, byIdProductsController } = require("../controller/productsController");

const productsRoutes = express.Router();

productsRoutes.get("/products", allProductsController)

productsRoutes.get("/products/:product_id", byIdProductsController)


module.exports = productsRoutes