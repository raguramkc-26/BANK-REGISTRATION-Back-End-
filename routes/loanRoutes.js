const express = require("express");

const router = express.Router();

const {
  createLoan,
  getLoans,
} =
require("../controllers/loanController");

router.post("/", createLoan);

router.get("/", getLoans);

module.exports = router;