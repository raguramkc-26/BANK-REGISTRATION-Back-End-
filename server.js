const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(
  cors({
    origin: [
    "http://localhost:5173",
    "https://bank-registration-red.vercel.app"
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/atm", require("./routes/atmRoutes"));
app.use("/api/loan", require("./routes/loanRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});