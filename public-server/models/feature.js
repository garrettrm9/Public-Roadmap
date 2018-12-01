const db = require("../db/index.js");
const feature = {};

const featuresWithCompanies = [];

const getCompanyName = function(featureRequest) {
  // console.log('getCompanyName featureRequest', featureRequest)
  const product_name = featureRequest.product_name;
  db
    .one("SELECT company_name FROM products WHERE name = $1", [product_name])
    .then(company => {
      // console.log('getCompanyName company', company)
      featureRequest.company_name = company.company_name;
      // console.log('getCompanyName featureRequest', featureRequest)
      // next()
      return featureRequest;
      // featuresWithCompanies.push(featureRequest)
    })
    .catch(error => {
      console.log("error from getCompanyName feature model", error);
    });
};

feature.getAllFeatures = (req, res, next) => {
  db
    .manyOrNone("SELECT * FROM features")
    .then(features => {
      res.locals.features = features;
      // const newFeatures = features.map(feature => {
      //   getCompanyName(feature)
      // })
      // console.log("getAllFeatures newFeatures", newFeatures)
      // // console.log("getAllFeatures featuresWithCompanies", featuresWithCompanies)
      // res.locals.features = newFeatures;
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
      "INSERT INTO features (name, purpose, user_story, acceptance_criteria, business_value, wireframes, attachments, date_last_updated, product_name, user_email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        req.body.name,
        req.body.purpose,
        req.body.user_story,
        req.body.acceptance_criteria,
        req.body.business_value,
        req.body.wireframes,
        req.body.attachments,
        req.body.date_last_updated,
        req.body.product_name,
        req.body.user_email
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
      "UPDATE features SET name=$1, purpose=$2, user_story=$3, acceptance_criteria=$4, business_value=$5, wireframes=$6, attachments=$7, votes=$8, date_last_updated=$9, product_name=$10, user_email=$11 WHERE id=$12 RETURNING *",
      [
        req.body.name,
        // req.body.author,
        req.body.purpose,
        req.body.user_story,
        req.body.acceptance_criteria,
        req.body.business_value,
        req.body.wireframes,
        req.body.attachments,
        req.body.votes,
        req.body.date_last_updated,
        req.body.product_name,
        req.body.user_email,
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
