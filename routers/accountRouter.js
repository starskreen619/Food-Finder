const express = require("express");
const router = express.Router();

const accountController = require("../controllers/accountController");

router.get("/account", accountController.accountPage).post("/account", accountController.accountPage);

module.exports = router;
