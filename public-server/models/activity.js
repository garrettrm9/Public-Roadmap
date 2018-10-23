const db = require("../db/index.js");
const activity = {};

activity.getAllVotes = (req, res, next) => {
  db
    .manyOrNone("SELECT * FROM votes")
    .then(votes => {
      res.locals.votes = votes;
      next();
    })
    .catch(error => {
      console.log("error from getAllVotes model", error);
      next(error);
    });
};

activity.getAllFollows = (req, res, next) => {
  db
    .manyOrNone("SELECT * FROM follows")
    .then(follows => {
      res.locals.follows = follows;
      next();
    })
    .catch(error => {
      console.log("error from getAllFollows model", error);
      next(error);
    });
};

activity.addVote = (req, res, next) => {
  db
    .one(
      "INSERT INTO votes (user_id, feature_id) VALUES ($1, $2) RETURNING *",
      [req.body.user_id, req.body.feature_id]
    )
    .then(vote => {
      res.locals.vote = vote;
      next();
    })
    .catch(error => {
      console.log("error from addVote model", error);
      next(error);
    });
};

activity.addFollow = (req, res, next) => {
  db
    .one(
      "INSERT INTO votes (user_id, feature_id) VALUES ($1, $2) RETURNING *",
      [req.body.user_id, req.body.feature_id]
    )
    .then(vote => {
      res.locals.vote = vote;
      next();
    })
    .catch(error => {
      console.log("error from addFollow model", error);
      next(error);
    });
};

activity.deleteVote = (req, res, next) => {
  db
    .none("DELETE from votes WHERE id=$1", [req.params.id])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error from deleteVote model", error);
      next(error);
    });
};

activity.deleteFollow = (req, res, next) => {
  db
    .none("DELETE from follows WHERE id=$1", [req.params.id])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error from deleteFollow model", error);
      next(error);
    });
};

module.exports = activity;
