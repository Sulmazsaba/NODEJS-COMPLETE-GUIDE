const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getProducts);

router.get("/products", shopController.getProducts);

router.get("/product/:productId", shopController.getProduct);

router.post("/cart", shopController.postCart);
router.get("/cart", shopController.getCart);

router.post("/cart-delete-item", shopController.postCartDeleteProduct);

module.exports = router;
