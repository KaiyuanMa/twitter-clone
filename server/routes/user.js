const express = require("express");
const router = express.Router();
const { User } = require("../db");

router.get("/:userId", async (req, res, next) => {
  try {
    res.send(
      await User.findByPk(req.params.id, {
        attributes: ["id", "nickName", "bio", "createdAt"],
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
