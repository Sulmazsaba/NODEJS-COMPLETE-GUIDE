const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});
userSchema.methods.removeFromCart = function (productId) {
  const updatedCartItems = this.cart.items.filter((item) => {
    return item.productId.toString() !== productId.toString();
  });
  this.cart.Items = updatedCartItems;
  return this.save();
};

module.exports = mongoose.model("User", userSchema);

//     return this.getCart()
//       .then((products) => {
//         const order = {
//           items: products,
//           userId: this._id,
//         };
//         console.log(order);
//         return db.collection("orders").insertOne(order);
//       })
//       .then((res) => {
//         this.cart = { items: [] };
//         return db
//           .collection("users")
//           .updateOne(
//             { _id: new ObjectId(this._id) },
//             { $set: { cart: { items: [] } } }
//           );
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   getOrders() {
//     const db = getDb();
//     return db
//       .collection("orders")
//       .find({ userId: new ObjectId(this._id) })
//       .toArray();
//   }
// }
