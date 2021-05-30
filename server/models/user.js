const mongoDb = require("mongodb");
const getDb = require("../util/database").getDb;
const ObjectId = mongoDb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.email = email;
    this.name = username;
    this.cart = cart;
    this._id = id;
  }

  save() {
    const db = getDb();
    db.collection("users").insertOne(this);
  }

  addToCart(product) {
    const cardProductIndex = this.cart.items.findIndex((cp) => {
      return cp.productId.toString() == product._id.toString();
    });
    let newQuantity = 1;
    const updatedItems = [...this.cart.items];

    if (cardProductIndex >= 0) {
      newQuantity = this.cart.items[cardProductIndex].quantity + 1;
      updatedItems[cardProductIndex].quantity = newQuantity;
    } else {
      updatedItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity,
      });
    }
    const updatedCard = {
      items: updatedItems,
    };
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCard } }
      );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) })
      .then((user) => {
        console.log("user: " + user);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCart() {
    const productIds = this.cart.items.map((item) => {
      return item.productId;
    });
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: { $in: productIds } })
      .toArray()
      .then((products) => {
        return products.map((product) => {
          return {
            ...product,
            quantity: this.cart.items.find(
              (j) => j.productId.toString() === product._id.toString()
            ).quantity,
          };
        });
      });
  }

  deleteItemFromCart(productId) {
    const itemIndexofCart = this.cart.items.findIndex((i) => {
      return i.productId.toString() == productId.toString();
    });

    let updatedQuantity;
    let updatedItems = [...this.cart.items];
    if (itemIndexofCart >= 0) {
      updatedQuantity = this.cart.items[itemIndexofCart].quantity - 1;

      if (updatedQuantity === 0) {
        updatedItems = this.cart.items.splice(itemIndexofCart, 1);
      } else {
        updatedItems[itemIndexofCart].quantity = updatedQuantity;
      }
    }
    const updateCart = {
      items: updatedItems,
    };
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updateCart } }
      );
  }

  addOrder() {
    const db = getDb();
    return db
      .collection("orders")
      .insertOne(this.cart)
      .then((res) => {
        this.cart = { items: [] };
        return db
          .collection("users")
          .updateOne(
            { _id: new ObjectId(this._id) },
            { $set: { cart: { items: [] } } }
          );
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
