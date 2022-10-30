const conn = require("./conn");
const User = require("./User");
const Tweet = require("./Tweet");
const Like = require("./Like");
const Follower = require("./Follower");

User.hasMany(Tweet);
// User.hasMany(Follower, { as: "follower", foreignKey: "followerId" });
// User.hasMany(Follower, { as: "followee", foreignKey: "followeeId" });
Tweet.hasMany(Tweet);
Tweet.hasMany(Like);

Tweet.belongsTo(User);
Tweet.belongsTo(Tweet);
Like.belongsTo(User);
Like.belongsTo(Tweet);
Follower.belongsTo(User, { as: "AsFollower", foreignKey: "followerId" });
Follower.belongsTo(User, { as: "AsFollowee", foreignKey: "followeeId" });

module.exports = {
  conn,
  User,
  Tweet,
  Like,
  Follower,
};
