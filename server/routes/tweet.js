const express = require("express");
const router = express.Router();
const Op = require("sequelize").Op;
const { Tweet, User } = require("../db");
const isLoggedIn = require("./middleware");

//Get a tweet
router.get("/:tweetId", async (req, res, next) => {
  try {
    res.send(await Tweet.findByPk(req.params.tweetId));
  } catch (ex) {
    next(ex);
  }
});

//Get comments of a tweet
router.get("/comments/:tweetId", async (req, res, next) => {
  try {
    res.send(
      await Tweet.findAll({
        where: {
          tweetId: req.params.tweetId,
          tweetType: "comment",
        },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

//Get retweet user list
router.get("/retweets/:tweetId", async (req, res, next) => {
  try {
    res.send(
      await Tweet.findAll({
        where: {
          tweetId: req.params.tweetId,
          tweetType: "retweet",
        },
        include: [
          {
            model: User,
          },
        ],
      })
    );
  } catch (ex) {
    console.log(ex);
  }
});

//Get all quote retweets
router.get("/quoteTweet/:tweetId", async (req, res, next) => {
  try {
    res.send(
      await Tweet.findAll({
        where: {
          id: req.params.tweetId,
          tweetType: "quote_tweet",
        },
      })
    );
  } catch (ex) {
    console.log(ex);
  }
});

//Get user tweets
router.get("/user/:userId", async (req, res, next) => {
  try {
    res.send(
      await Tweet.findAll({
        where: {
          userId: req.params.userId,
          [Op.not]: [{ tweetType: "comment" }],
        },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

//get user tweets with reply
router.get("/user/withComments/:userId", async (req, res, next) => {
  try {
    res.send(await Tweet.findAll({ where: { userId: req.params.userId } }));
  } catch (ex) {
    next(ex);
  }
});

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const tweet = {
      content: req.body.content,
      tweetType: req.body.tweetType,
      userId: req.user.id,
    };
    //Check if its comment retweet, and check if parent tweet Id is valid
    if (req.body.tweetId) {
      if (!(await Tweet.findByPk(req.body.tweetId))) throw "Tweet Not Found";
      tweet.tweetId = req.body.tweetId;
    }
    res.send(await Tweet.create(tweet));
  } catch (ex) {
    next(ex);
  }
});

router.delete("/:tweetId", isLoggedIn, async (req, res, next) => {
  try {
    const tweet = Tweet.findByPk(req.params.tweetId);
    if (tweet.userId !== req.user.id) throw "No Access";
    await tweet.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
