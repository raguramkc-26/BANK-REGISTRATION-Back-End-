const mongoose = require("mongoose");

const atmSchema = new mongoose.Schema(
{
  username: String,
  accountNumber: String,
  cardType: String,
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
  "ATMApplication",
  atmSchema
);