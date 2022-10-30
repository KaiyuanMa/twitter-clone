const conn = require("./conn");
const User = require("./User");
const Tweet = require("./Tweet");
const Like = require("./Like");
const Follower = require("./Follower");
const Following = require("./Following");

User.hasMany(Follower);
User.hasMany(Following);
User.hasMany(Tweet);
Tweet.hasMany(Like);

module.exports = {
  conn,
  User,
  Tweet,
  Like,
  Follower,
  Following,
};
