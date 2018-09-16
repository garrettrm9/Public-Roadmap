const router = require("express").Router();
const user = require("../models/user");
const TokenService = require("../services/tokenService");

router.post("/", user.create, (req, res) => {
  res.json({ token: res.locals.token, user: res.locals.user });
});

router.put("/", user.update, (req, res) => {
  const { user } = res.locals;
  res.json(user);
});

router.post("/login", user.login, (req, res) => {
  if (!res.locals.user) {
    res.status(401).json({ err: "Login failed" });
  } else {
    const { password_digest, ...user } = res.locals.user;
    res.json({ token: res.locals.token, user });
  }
});

module.exports = router;
