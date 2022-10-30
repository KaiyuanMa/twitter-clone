const { Like } = require("../index");

const seedLike = async (tweet) => {
  try {
    const _LIKE = [
      {
        userId: "NASA",
        tweetId: tweet[0].id,
      },
      {
        userId: "NASA",
        tweetId: tweet[1].id,
      },
      {
        userId: "NASA",
        tweetId: tweet[2].id,
      },
      {
        userId: "JoeBiden",
        tweetId: tweet[0].id,
      },
      {
        userId: "JoeBiden",
        tweetId: tweet[1].id,
      },
      {
        userId: "JoeBiden",
        tweetId: tweet[2].id,
      },
    ];
    await Promise.all(_LIKE.map((like) => Like.create(like)));
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedLike;
