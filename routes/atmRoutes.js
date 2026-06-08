const express = require("express");

const router = express.Router();

const {
  createATM,
  getATM,
} =
require("../controllers/atmController");

router.post("/", createATM);

router.get("/", getATM);

module.exports = router;