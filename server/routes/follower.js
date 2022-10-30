const express = require("express");
const router = express.Router();
const { Follower, User } = require("../db");
const Op = require("sequelize").Op;

//Get user follower
router.get("/:userId", async (req, res, next) => {
  try {
    res.send(
      await Follower.findAll({
        where: { followeeId: req.params.userId },
        include: [
          {
            model: User,
            as: "AsFollower",
          },
        ],
      })
    );
  } catch (ex) {
    console.log(ex);
  }
});

//Get user followee
router.get("/followee/:userId", async (req, res, next) => {
  try {
    res.send(
      await Follower.findAll({
        where: { followerId: req.params.userId },
        include: [
          {
            model: User,
            as: "AsFollowee",
          },
        ],
      })
    );
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
