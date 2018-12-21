const db = require("../db/index.js");
const activity = {};

// activity.getAllActivities = (req, res, next) => {
//   db
//     .manyOrNone("SELECT * FROM activities")
//     .then(activities => {
//       res.locals.activities = activities;
//       next();
//     })
//     .catch(error => {
//       console.log("error from getAllActivities model", error);
//       next(error);
//     });
// };

activity.getAllUserActivities = (req, res, next) => {
  db
    .manyOrNone("SELECT * FROM activities where user_email=$1", [req.params.id])
    .then(activities => {
      res.locals.activities = activities;
      next();
    })
    .catch(error => {
      console.log("error from getAllUserActivities model", error);
      next(error);
    });
};

// activity.getAllVotes = (req, res, next) => {
//   db
//     .manyOrNone("SELECT * FROM activities WHERE type=$1", ["vote"])
//     .then(votes => {
//       res.locals.votes = votes;
//       next();
//     })
//     .catch(error => {
//       console.log("error from getAllVotes model", error);
//       next(error);
//     });
// };

activity.getVoteCount = (req, res, next) => {
  db
    .manyOrNone(
      "SELECT COUNT(*) from activities where type=$1 AND feature_id=$2",
      ["vote", req.params.id]
    )
    .then(votes => {
      // console.log("getVoteCount resp", votes[0].count);
      res.locals.votes = votes[0].count;
      next();
    })
    .catch(error => {
      console.log("error from getVoteCount model", error);
      next(error);
    });
};

activity.newActivity = (req, res, next) => {
  db
    .one(
      "INSERT INTO activities (type, feature_id, user_email) VALUES ($1, $2, $3) RETURNING *",
      [req.body.type, req.params.id, req.body.user_email]
    )
    .then(vote => {
      res.locals.vote = vote;
      next();
    })
    .catch(error => {
      console.log("error from newActivity model", error);
      next(error);
    });
};

activity.deleteActivity = (req, res, next) => {
  db
    .none(
      "DELETE from activities WHERE type=$1 AND feature_id=$2 AND user_email=$3",
      [req.body.type, req.params.id, req.body.user_email]
    )
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error from deleteActivity model", error);
      next(error);
    });
};

// activity.getAllFollows = (req, res, next) => {
//   db
//     .manyOrNone("SELECT * FROM activities WHERE type=$1", ["follow"])
//     .then(follows => {
//       res.locals.follows = follows;
//       next();
//     })
//     .catch(error => {
//       console.log("error from getAllFollows model", error);
//       next(error);
//     });
// };

// activity.getUserFollows = (req, res, next) => {
//   db
//     .manyOrNone("SELECT * FROM activities WHERE type=$1 AND user_email = $2", [
//       "follow",
//       req.params.email
//     ])
//     .then(follows => {
//       res.locals.follows = follows;
//       next();
//     })
//     .catch(error => {
//       console.log("error from getFollows model", error);
//     });
// };

// activity.userSearch = (req, res, next) => {
//   db
//     .manyOrNone(`SELECT * from ${req.params.category} WHERE name=$1`, [
//       req.params.name
//     ])
//     .then(results => {
//       res.locals.results = results;
//       next();
//     })
//     .catch(error => {
//       console.log("error from userSearch model", error);
//     });
// };

module.exports = activity;
