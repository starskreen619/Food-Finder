const express = require("express");
const router = express.Router();

const contactusController = require("../controllers/contactusController");

router
  .get("/contactus", contactusController.contactusPage)
  .post("/contactus", contactusController.contactusPage);

module.exports = router;
