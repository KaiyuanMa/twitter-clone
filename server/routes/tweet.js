const express = require("express");
const router = express.Router();
const { Tweet, User } = require("../db");

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
          tweetId: req.params.tweetId,
          tweetType: "quote_tweet",
        },
      })
    );
  } catch (ex) {
    console.log(ex);
  }
});

//Get user tweets
router.get("/:userId", async (req, res, next) => {
  try {
    res.send(
      await Tweet.findAll({
        where: {
          userId: req.params.userId,
          [Op.or]: [{ tweetType: comment }],
        },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

//get user tweets with reply
router.get("/withComments/:userId", async (req, res, next) => {
  try {
    res.send(await Tweet.findAll({ where: { userId: req.params.userId } }));
  } catch (ex) {
    next(ex);
  }
});
