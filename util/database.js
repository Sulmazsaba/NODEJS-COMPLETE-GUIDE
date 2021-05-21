const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://sulmaz:PKSfpoJ7zhdB98Rn@cluster0.bg87y.mongodb.net/test?retryWrites=true&w=majority&useUnifiedTopology=true"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = mongoConnect;
