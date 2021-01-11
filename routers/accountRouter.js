const express = require("express");
const router = express.Router();

const accountController = require("../controllers/accountController");

router.get("/account", accountController).post("/account", accountController);

module.exports = router;
