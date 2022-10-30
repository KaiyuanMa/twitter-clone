const Sequelize = require("sequelize");

const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/twitter-clone"
);

module.exports = conn;
