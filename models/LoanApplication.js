const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
{
  username: String,
  loanType: String,
  amount: Number,

  status: {
    type: String,
    default: "Pending",
  },

  reason: {
    type: String,
    default: "",
  }
},
{
  timestamps: true,
}
);

module.exports = mongoose.model(
  "LoanApplication",
  loanSchema
);