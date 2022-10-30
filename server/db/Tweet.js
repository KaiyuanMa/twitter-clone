const conn = require("./conn");
const { Sequelize } = conn;

const Tweet = conn.define("tweet", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  commentCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  likeCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  retweetCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  quoteTweetCount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  isPinned: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  tweetType: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "tweet",
    isIn: [["tweet", "comment", "retweet", "quote_tweet"]],
  },
});

module.exports = Tweet;
