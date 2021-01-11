const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");

router.get("/list", listController).post("/list", listController);

module.exports = router;
