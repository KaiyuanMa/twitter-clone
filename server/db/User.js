const conn = require("./conn");
const { Sequelize } = conn;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = conn.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  nickName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.addHook("beforeSave", async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});

User.findByToken = async function findByToken(token) {
  try {
    const id = jwt.verify(token, process.env.JWT).id;
    const user = await User.findByPk(id);
    if (!user) {
      throw "error";
    }
    return user;
  } catch (ex) {
    console.log(ex);
    const error = new Error("bad token");
    error.status = 401;
    throw error;
  }
};

User.authenticate = async function (credentials) {
  const user = await this.findOne({
    where: {
      username: credentials.username,
    },
  });
  if (user && (await bcrypt.compare(credentials.password, user.password))) {
    return jwt.sign({ id: user.id }, process.env.JWT);
  }
  const error = new Error("Bad Credentials");
  error.status = 401;
  throw error;
};

module.exports = User;
