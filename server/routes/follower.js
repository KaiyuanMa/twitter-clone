const express = require("express");
const router = express.Router();
const { Follower, User } = require("../db");
const isLoggedIn = require("./middleware");
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
    next(ex);
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
    next(ex);
  }
});

//Make a follow
router.post("/:followeeId", isLoggedIn, async (req, res, next) => {
  try {
    res.send(
      await Follower.create({
        followerId: req.user.id,
        followeeId: req.params.followeeId,
      })
    );
  } catch (ex) {
    next(ex);
  }
});

//Unfollow
router.delete("/:followeeId", isLoggedIn, async (req, res, next) => {
  try {
    const connection = Follower.findOne({
      where: { followerId: req.user.id, followeeId: req.params.followeeId },
    });
    await connection.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
