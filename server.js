const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB =
require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/users",
  require("./routes/userRoutes")
);

app.use(
  "/api/atm",
  require("./routes/atmRoutes")
);

app.use(
  "/api/loans",
  require("./routes/loanRoutes")
);

app.get("/", (req, res) => {
  res.send(
    "Unity Bank Backend Running"
  );
});

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});