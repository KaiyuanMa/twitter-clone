const conn = require("./conn");
const { Sequelize } = conn;

const Follower = conn.define("follower", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  followerId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Follower;
