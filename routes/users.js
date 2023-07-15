const express = require("express");

const router = express.Router();

const { _register, _login } = require("../controllers/users.js");
const { verifyToken } = require("../middlequeries/VerifyToken.js");

router.post("/register",  _register);
router.post("/login", _login);
router.get("/verify", verifyToken, (req, res) => {
  res.sendStatus(200);
});

module.exports = {
  router,
};
