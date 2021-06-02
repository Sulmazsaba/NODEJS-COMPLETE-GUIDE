const Product = require("../models/product");
const Order = require("../models/order");

exports.getProducts = (req, res, nex) => {
  Product.find()
    // .select("title price -_id")
    // .populate("userId", "name")
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
    .populate("cart.items.productId")
    .execPopulate()
    .then((products) => {
      console.log(products);
      return products;
    })
    .catch((err) => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  return req.user
    .removeFromCart(prodId)
    .then((res) => {
      console.log("deleted!");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postOrder = (req, res, next) => {
  const order = new Order({
    products: req.user.cart.items.populate("productId"),
    userId: req.user,
  });
  order.save();
};
exports.getOrders = (req, res, next) => {
  return req.user
    .getOrders()
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
