const express = require("express");
const router = express.Router();
const { Like, User } = require("../db");

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

module.exports = router;
