const bcrypt = require("bcrypt");

const db = require("../db/index.js");
const tokenService = require("../services/tokenService");

const User = {};

User.create = function(req, res, next) {
  const user = req.body;
  const passwordHash = bcrypt.hashSync(user.password, 10);
  db
    .one(
      "INSERT INTO users (first_name, last_name, middle_initial, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        user.first_name,
        user.last_name,
        user.middle_initial,
        user.email,
        passwordHash,
        0
      ]
    )
    .then(data => {
      const { password_hash, ...userData } = data;
      res.locals.user = userData;
      const tokenData = {
        username: userData.username
      };

      tokenService
        .makeToken(tokenData)
        .then(token => {
          // console.log("user.create model token", token);
          res.locals.token = token;
          next();
        })
        .catch(next);
    })
    .catch(err => {
      console.log("User Create failed", err);
      next();
    });
};

User.update = function(req, res, next) {
  const user = req.body;
  db
    .one(
      "UPDATE users SET first_name=$1, last_name=$2, middle_initial=$3, email=$4, WHERE id=$5 RETURNING *",
      [
        user.first_name,
        user.last_name,
        user.middle_initial,
        user.email,
        user.id
      ]
    )
    .then(user => {
      res.locals.user = user;
      next();
    })
    .catch(err => {
      console.log("User update failed", err);
      next();
    });
};

User.findByEmail = function(email) {
  return db.one("SELECT * FROM users WHERE email = $1", [email]);
};

User.login = function(req, res, next) {
  const user = req.body;
  User.findByEmail(user.email)
    .then(userData => {
      const isAuthed = bcrypt.compareSync(user.password, userData.password);

      if (!isAuthed) {
        next();
      }
      res.locals.user = userData;

      const data = { email: userData.email };

      tokenService
        .makeToken(data)
        .then(token => {
          res.locals.token = token;
          next();
        })
        .catch(err => {
          next();
        });
    })
    .catch(err => {
      next();
    });
};

module.exports = User;
