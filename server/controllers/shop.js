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
      console.log(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  return Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  return req.user
    .getCart()
    .then((products) => {
      console.log(products);
      return products;
    })
    .catch((err) => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  return req.user
    .deleteItemFromCart(prodId)
    .then((res) => {
      console.log("deleted!");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postOrder = (req, res, next) => {
  return req.user
    .addOrder()
    .then()
    .catch((err) => {
      console.log(err);
    });
};
