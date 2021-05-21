const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const adminRoutes = require("./server/routes/admin");
const shopRoutes = require("./server/routes/shop");
const errorController = require("./controllers/error");
const mongoConnect = require("./server/util/database").mongoConnect;

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.)

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

mongoConnect((client) => {
  console.log(client);
  app.listen(3000);
});
