const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const adminRoutes = require("./routes/admin");
const errorController = require("./controllers/error");
const shopRoutes = require("./routes/shop");
// const mongoConnect = require("./util/database").mongoConnect;
const User = require("./models/user");
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  User.findById("60b275d3dfc0ce279ddb5630")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

// mongoConnect((client) => {
//   app.listen(3000);
// });
mongoose
  .connect(
    "mongodb+srv://sulmaz:PKSfpoJ7zhdB98Rn@cluster0.bg87y.mongodb.net/shop?retryWrites=true&w=majority&useUnifiedTopology=true",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Sulmaz",
          email: "sulmazsaba@gmail.com",
          cart: { items: [] },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
