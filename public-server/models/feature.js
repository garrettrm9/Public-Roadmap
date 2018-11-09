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

feature.newFeature = (req, res, next) => {
  db
    .one(
      "INSERT INTO features (name, author, purpose, user_story, acceptance_criteria, business_value, wireframes, attachments, votes, date_last_updated) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        req.body.name,
        req.body.author,
        req.body.purpose,
        req.body.user_story,
        req.body.acceptance_criteria,
        req.body.business_value,
        req.body.wireframes,
        req.body.attachments,
        req.body.votes,
        req.body.date_last_updated
      ]
    )
    .then(id => {
      res.locals.id = id;
      next();
    })
    .catch(error => {
      console.log("error from newFeature model", error);
      next(error);
    });
};

feature.editFeature = function(req, res, next) {
  db
    .one(
      "UPDATE features SET name=$1, author=$2, purpose=$3, user_story=$4, acceptance_criteria=$5, business_value=$6, wireframes=$7, attachments=$8, votes=$9, date_last_updated=$10 WHERE id=$11 RETURNING *",
      [
        req.body.name,
        req.body.author,
        req.body.purpose,
        req.body.user_story,
        req.body.acceptance_criteria,
        req.body.business_value,
        req.body.wireframes,
        req.body.attachments,
        req.body.votes,
        req.body.date_last_updated,
        req.params.feature_id
      ]
    )
    .then(feature => {
      res.locals.feature = feature;
      next();
    })
    .catch(err => {
      console.log("error from editFeature model", err);
      next();
    });
};

feature.deleteFeature = (req, res, next) => {
  db
    .none("DELETE FROM features WHERE id = $1", [req.params.feature_id])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error from deleteFeature model", error);
      next(error);
    });
};

module.exports = feature;
