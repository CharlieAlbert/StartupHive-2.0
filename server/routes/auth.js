const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/profile", AuthController.profile);
router.post("/user_update", AuthController.user_update);
router.post("/user_delete", AuthController.user_delete);

module.exports = router;
