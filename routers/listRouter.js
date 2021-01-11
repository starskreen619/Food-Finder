const express = require("express");
const router = express.Router();

const userController = require("../controllers/usercontroller");

router.get("/list", listController).post("/list", listController);

module.exports = router;
