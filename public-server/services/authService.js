const bcrypt = require("bcrypt");
const tokenService = require("./tokenService");
const user = require("../models/user");

function restrict() {
  return [
    (req, res, next) =>
      tokenService
        .verify(req.authToken)
        .then(data => {
          next();
        })
        .catch(next),

    (err, req, res, next) => {
      console.log("authService err", err);
      res.staus(401).json({});
    }
  ];
}

function isLoggedIn(req, res, next) {
  tokenService
    .verify(req.authToken)
    .then(data => {
      console.log("authService isLoggedIn", data);
      res.locals.isLoggedIn = "YES";
      res.locals.user = data;
      next();
    })
    .catch(err => {
      res.locals.isLoggedIn = "NO";
      next();
    });
}

module.exports = {
  restrict,
  isLoggedIn
};
