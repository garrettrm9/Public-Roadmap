const jwt = require("jsonwebtoken");
const SECRET = "abigoldsecret";

class Token {
  verify(token) {
    console.log("tokenService Token called");
    return new Promise((resolve, reject) =>
      jwt.verify(
        token,
        SECRET,
        (err, data) => (err ? reject(err) : resolve(data))
      )
    );
  }

  receiveToken(req, res, next) {
    if (req.headers.authorization) {
      req.authToken = req.headers.authorization.replace(/^Bearer\s/, "");
    }
    next();
  }

  decode(token) {
    return jwt.decode(token);
  }

  makeToken(payload) {
    return new Promise((resolve, reject) =>
      jwt.sign(
        payload,
        SECRET,
        (err, data) => (err ? reject(err) : resolve(data))
      )
    );
  }
}

module.exports = new Token();
