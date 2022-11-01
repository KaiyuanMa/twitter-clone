const express = require("express");
const router = express.Router();
const { User } = require("../db");
const { isLoggedIn } = require("./middleware");
const seed = require("../db/signUpSeed.js/index");

router.post("/", async (req, res, next) => {
  try {
    const credentials = {
      username: req.body.username,
      password: req.body.password,
    };
    res.send({ token: await User.authenticate(credentials) });
  } catch (ex) {
    next(ex);
  }
});

router.get("/", isLoggedIn, async (req, res, next) => {
  res.send(req.user);
});

router.post("/signup", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        username: req.body.username,
      },
    });
    if (users.length === 0) {
      let user = await User.create(req.body);
      await seed(user.id);
      const credentials = {
        username: req.body.username,
        password: req.body.password,
      };
      res.send({ token: await User.authenticate(credentials) });
    } else {
      res.send({ type: "error", message: "username exist" });
    }
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
