const router = require("express").Router();
const activity = require("../models/activity");

router.get("/votes/:id", activity.getVotes, (req, res) => {
  const { votes } = res.locals;
  res.json(votes);
});

router.post("/votes", activity.addVote, (req, res) => {
  res.json(res.locals);
});

router.delete("/votes/:id", activity.deleteVote, (req, res) => {
  console.log("vote removed");
});

router.get("/follows", activity.getAllFollows, (req, res) => {
  const { follows } = res.locals;
  res.json(follows);
});

router.get("/follows/:id", activity.getFollows, (req, res) => {
  const { follows } = res.locals;
  res.json(follows);
});

router.post("/follows", activity.addFollow, (req, res) => {
  res.json(res.locals);
});

router.delete("/follows/:id", activity.deleteFollow, (req, res) => {
  console.log("follow removed");
});

module.exports = router;
