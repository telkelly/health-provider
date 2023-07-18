const express = require("express");

const router = express.Router();

const { _register, _login, _getUser } = require("../controllers/users.js");
const { verifyToken } = require("../middlequeries/VerifyToken.js");

router.post("/register",  _register);
router.post("/login", _login);
router.get("/user/:id", _getUser);
router.get("/verify", verifyToken, (req, res) => {
  res.send('Yo u are auth')
  res.sendStatus(200);
});

module.exports = {
  router,
};
