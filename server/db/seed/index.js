const { conn } = require("../index");
const seedFollower = require("./follower");
const seedLike = require("./like");
const seedAllTweet = require("./tweet");
const seedUser = require("./user");

const syncAndSeed = async () => {
  try {
    await conn.sync({ force: true });
    await seedUser();
    await seedFollower();
    const tweet = await seedAllTweet();
    await seedLike(tweet);
  } catch (ex) {
    console.log(ex);
  }
};
syncAndSeed();

module.exports = syncAndSeed;
