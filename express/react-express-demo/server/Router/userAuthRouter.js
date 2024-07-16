const router = require("express").Router();
const {
  signup,
  login,
  forgotPassword,
  verifyOtp,
} = require("../AppController/userAuthController");

router.post("/signup", signup);

router.post("/login", login);

router.post("/forgotpassword", forgotPassword);

router.post("/verifyotp", verifyOtp);

module.exports = router;
