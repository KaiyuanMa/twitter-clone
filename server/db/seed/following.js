const { Following } = require("../index");

const seedFollowing = async () => {
  try {
    const _FOLLOWING = [
      {
        followingId: "elonmusk",
        userId: "NASA",
      },
      {
        followingId: "elonmusk",
        userId: "JoeBiden",
      },
    ];
    await Promise.all(
      _FOLLOWING.map((followingId) => Following.create(followingId))
    );
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedFollowing;
