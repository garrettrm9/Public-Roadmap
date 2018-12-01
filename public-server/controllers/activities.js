const router = require("express").Router();
const activity = require("../models/activity");

router.get("/", activity.getAllActivities, (req, res) => {
  const { activities } = res.locals;
  res.json(activities);
});

router.get("/votes", activity.getAllVotes, (req, res) => {
  const { votes } = res.locals;
  res.json(votes);
});

router.post("/:id", activity.newActivity, (req, res) => {
  res.json(res.locals);
});

router.delete("/:id", activity.deleteActivity, (req, res) => {
  console.log("activity removed");
});

router.get("/follows", activity.getAllFollows, (req, res) => {
  const { follows } = res.locals;
  res.json(follows);
});

router.get("/follows/:email", activity.getUserFollows, (req, res) => {
  const { follows } = res.locals;
  res.json(follows);
});

module.exports = router;
