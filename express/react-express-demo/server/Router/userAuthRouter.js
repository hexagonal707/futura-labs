const router = require("express").Router();
const {
  signup,
  login,
  userForgotPassword,
} = require("../AppController/userAuthController");

router.post("/signup", signup);

router.post("/login", login);

router.post("/userforgotpassword", userForgotPassword);

module.exports = router;
