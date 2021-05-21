const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://sulmaz:PKSfpoJ7zhdB98Rn@cluster0.bg87y.mongodb.net/shop?retryWrites=true&w=majority&useUnifiedTopology=true"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const getDb = () => {
  if (_db) return _db;
  else throw "DB not Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
