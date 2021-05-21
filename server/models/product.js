const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, description, imgUrl) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
  }

  save() {
    const db = getDb();
    db.collection("products")
      .insertOne(this)
      .then((res) => {
        console.log("inserted successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getAll() {
    return products;
  }
}

module.exports = Product;