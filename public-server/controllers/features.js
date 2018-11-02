const router = require("express").Router();
const feature = require("../models/feature");

router.get("/", feature.getAllFeatures, (req, res) => {
  const { features } = res.locals;
  res.json(features);
});

router.get("/:user_id", feature.getUserFeatures, (req, res) => {
  const { features } = res.locals;
  res.json(features);
});

router.post("/", feature.newFeature, (req, res) => {
  res.json(res.locals);
});

router.put("/:feature_id", feature.editFeature, (req, res) => {
  const { feature } = res.locals;
  res.json(feature);
});

router.delete("/:feature_id", feature.deleteFeature, (req, res) => {
  res.json();
});

module.exports = router;
