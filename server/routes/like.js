const express = require("express");
const router = express.Router();
const { Like, User, Tweet } = require("../db");
const isLoggedIn = require("./middleware");

//Get users who liked a tweet
router.get("/:tweetId", async (req, res, next) => {
  try {
    res.send(
      await Like.findAll({
        where: { tweetId: req.params.tweetId },
        include: [{ model: User }],
      })
    );
  } catch (ex) {
    console.log(ex);
  }
});

router.post("/:tweetId", isLoggedIn, async (req, res, next) => {
  try {
    const tweet = Tweet.findByPk(req.params.tweetId);
    if (!tweet.id) throw "Tweet does not exist";
    res.send(
      await Like.create({ tweetId: req.params.tweetId, userId: req.user.id })
    );
  } catch (ex) {
    console.log(ex);
  }
});

router.delete("/:tweetId", isLoggedIn, async (req, res, next) => {
  try {
    const like = await Like.findOne({
      where: { userId: req.body.id, tweetId: req.params.tweetId },
    });
    like.destroy();
    res.sendStatus(202);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
