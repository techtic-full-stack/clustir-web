// routes/users.js
const express = require("express");
const router = express.Router();
const { register, verifyUser, resendOtp, loginUser, addMurchantBusiness } = require("../Controller");
const { authenticateToken } = require("../Utils/commonFile");

// router.post("/login", login);
router.post("/register", register);
router.patch("/verifyUser", verifyUser);
router.patch("/resendOtp", resendOtp);
router.post("/login", loginUser);
router.post("/addBusiness", authenticateToken, addMurchantBusiness);
// router.post("/verify", verify); // Assuming you have a separate function for verification

module.exports = router;
