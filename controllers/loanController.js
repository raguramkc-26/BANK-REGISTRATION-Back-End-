const LoanApplication =
require("../models/LoanApplication");

const createLoan =
async (req, res) => {

  const app =
    await LoanApplication.create(
      req.body
    );

  res.status(201).json(app);
};

const getLoans =
async (req, res) => {

  const apps =
    await LoanApplication.find();

  res.json(apps);
};

module.exports = {
  createLoan,
  getLoans,
};