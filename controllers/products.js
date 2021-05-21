const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("add-product");
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  product.res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.getAll();
  res.render("shop", {
    products: products,
  });
};
