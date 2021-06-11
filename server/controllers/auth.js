exports.getLogin = (req, res, next) => {
  console.log("get login");
};

exports.postLogin = (req, res, next) => {
  req.isLoggedIn = true;
  console.login("login was successful!");
};
