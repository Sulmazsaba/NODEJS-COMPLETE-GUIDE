const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const adminRoutes = require("./routes/admin");
const errorController = require("./controllers/error");
const shopRoutes = require("./routes/shop");
const mongoConnect = require("./util/database").mongoConnect;

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.)

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

mongoConnect((client) => {
  console.log(client);
  app.listen(3000);
});
