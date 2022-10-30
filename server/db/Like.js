const conn = require("./conn");
const { Sequelize } = conn;

const Like = conn.define("like", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
});

module.exports = Like;
