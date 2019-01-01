const router = require("express").Router();
const activity = require("../models/activity");

// router.get("/", activity.getAllActivities, (req, res) => {
//   const { activities } = res.locals;
//   res.json(activities);
// });

router.get("/:id", activity.getAllUserActivities, (req, res) => {
  const { activities } = res.locals;
  res.json(activities);
});

// router.get("/votes", activity.getAllVotes, (req, res) => {
//   const { votes } = res.locals;
//   res.json(votes);
// });

router.post("/:id", activity.newActivity, (req, res) => {
  res.json(res.locals);
});

router.delete("/:id", activity.deleteActivity, (req, res) => {
  console.log("activity removed");
});

// router.get("/follows", activity.getAllFollows, (req, res) => {
//   const { follows } = res.locals;
//   res.json(follows);
// });

// router.get("/follows/:email", activity.getUserFollows, (req, res) => {
//   const { follows } = res.locals;
//   res.json(follows);
// });

// router.get("/search/:category/:name", activity.userSearch, (req, res) => {
//   const { results } = res.locals;
//   res.json(results);
// });

router.get("/:id/votes", activity.getVoteCount, (req, res) => {
  const { votes } = res.locals;
  res.json(votes);
});

router.get("/:id/company", activity.getCompanyName, (req, res) => {
  const { name } = res.locals;
  res.json(name);
});

module.exports = router;
