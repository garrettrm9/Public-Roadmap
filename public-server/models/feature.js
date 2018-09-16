const db = require("../db/index.js");
const feature = {};

feature.getAllFeatures = (req, res, next) => {
  db
    .manyOrNone("SELECT * FROM features")
    .then(features => {
      res.locals.features = features;
      next();
    })
    .catch(error => {
      console.log("error from getAllFeatures model", error);
      next(error);
    });
};

feature.getUserFeatures = (req, res, next) => {
  db
    .manyOrNone("SELECT * FROM features WHERE user_id = $1", [
      req.params.user_id
    ])
    .then(features => {
      res.locals.features = features;
      next();
    })
    .catch(error => {
      console.log("error from getUserFeatures model", error);
      next(error);
    });
};
