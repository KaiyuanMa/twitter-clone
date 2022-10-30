const conn = require("./conn");
const { Sequelize } = conn;

const Following = conn.define("following", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  followingId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Following;
