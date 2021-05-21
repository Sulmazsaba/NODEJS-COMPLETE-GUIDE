const express = require("express");

const routes = express.Router();
const productsController = require("../controllers/products");

routes.get("/", productsController.getProducts);

module.exports = routes;
