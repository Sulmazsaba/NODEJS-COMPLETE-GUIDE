const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product");
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.price,
    req.body.description,
    req.body.imgUrl,
    null,
    req.user._id
  );
  product.save();
  product.res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.getAll();
  res.render("shop", {
    products: products,
  });
};

exports.postEditProduct = (req, res, next) => {
  const productId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImgUrl = req.body.imgUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;

  const product = new Product(
    updatedTitle,
    updatedPrice,
    updatedDescription,
    updatedImgUrl,
    productId
  );

  return product
    .save()
    .then((res) => {
      console.log("updated Product");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
    .then((res) => {
      console.log("Deleted");
    })
    .catch((err) => console.log(err));
};
