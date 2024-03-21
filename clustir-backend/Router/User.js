// routes/users.js
const express = require("express");
const router = express.Router();
const { register, verifyUser } = require("../Controller");

// router.post("/login", login);
router.post("/register", register);
router.patch("/verifyUser", verifyUser);
// router.post("/verify", verify); // Assuming you have a separate function for verification

module.exports = router;
