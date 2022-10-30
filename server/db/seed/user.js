const { User } = require("../index");

const _USER = [
  {
    id: "elonmusk",
    nickName: "Elon Musk",
    bio: "Chief Twit",
    password: "qwe",
  },
  {
    id: "JoeBiden",
    nickName: "Joe Biden",
    bio: "Husband to @DrBiden, proud father and grandfather. Ready to build back better for all Americans. Official account is @POTUS.",
    password: "qwe",
  },
  {
    id: "NASA",
    nickName: "NASA",
    bio: "There's space for everybody. ✨",
    password: "qwe",
  },
];

const seedUser = async () => {
  try {
    await Promise.all(_USER.map((user) => User.create(user)));
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedUser;
