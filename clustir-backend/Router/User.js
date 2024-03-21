// routes/users.js
const express = require("express");
const router = express.Router();
const { register, verifyUser, resendOtp, loginUser, addMurchantBusiness, getUserById } = require("../Controller");
const { authenticateToken } = require("../Utils/commonFile");

router.post("/register", register);
router.patch("/verifyUser", verifyUser);
router.patch("/resendOtp", resendOtp);
router.post("/login", loginUser);
router.post("/addBusiness", authenticateToken, addMurchantBusiness);
router.get("/getUserById/:id", authenticateToken, getUserById);

module.exports = router;
