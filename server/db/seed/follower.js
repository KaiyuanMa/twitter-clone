const { Follower } = require("../index");
const seedFollower = async () => {
  try {
    const _FOLLOWER = [
      {
        followerId: "NASA",
        followeeId: "elonmusk",
      },
      {
        followerId: "JoeBiden",
        followeeId: "elonmusk",
      },
    ];
    await Promise.all(_FOLLOWER.map((follower) => Follower.create(follower)));
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedFollower;
