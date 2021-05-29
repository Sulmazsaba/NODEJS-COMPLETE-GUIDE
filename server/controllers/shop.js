const Product = require("../models/product");

exports.getProducts = (req, res, nex) => {
  Product.fetchAll()
    .then((products) => {
      console.log(products);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  return Product.findById(prodId)
    .then((product) => {
      console.log(product)
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.getIndex = (req, res, next) => {};
