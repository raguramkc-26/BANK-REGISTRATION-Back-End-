const ATMApplication =
require("../models/ATMApplication");

const createATM =
async (req, res) => {

  const app =
    await ATMApplication.create(
      req.body
    );

  res.status(201).json(app);
};

const getATM =
async (req, res) => {

  const apps =
    await ATMApplication.find();

  res.json(apps);
};

module.exports = {
  createATM,
  getATM,
};