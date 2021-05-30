const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const adminRoutes = require("./routes/admin");
const errorController = require("./controllers/error");
const shopRoutes = require("./routes/shop");
const mongoConnect = require("./util/database").mongoConnect;
const User = require("./models/user");
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.)

app.use((req, res, next) => {
  User.findById("60b275d3dfc0ce279ddb5630")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

mongoConnect((client) => {
  app.listen(3000);
});
