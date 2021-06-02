const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product");
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    userId: req.user._id,
  });
  product.save();
  product.res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      console.log(products);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  const productId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImgUrl = req.body.imgUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;

  Product.findById(productId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imgUrl = updatedImgUrl;
      product.description = updatedDescription;
      return product.save();
    })
    .then((res) => {
      console.log("updated Product");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findeByIdAndRemove(prodId)
    .then((res) => {
      console.log("Deleted");
    })
    .catch((err) => console.log(err));
};
