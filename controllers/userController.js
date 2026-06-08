const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {

  try {

    const {
      firstName,
      lastName,
      phone,
      password,
      userType
    } = req.body;

    const username =
      `${firstName}${lastName}`
        .replace(/\s+/g, "")
        .toLowerCase();

    const exists =
      await User.findOne({ username });

    if (exists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await User.create({
        username,
        fullName:
          `${firstName} ${lastName}`,
        phone,
        password: hashedPassword,
        userType:
          userType || "user",
      });

    res.status(201).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const loginUser = async (req, res) => {

  try {

    const {
      username,
      password
    } = req.body;

    const user =
      await User.findOne({
        username:
          username
            .replace(/\s+/g, "")
            .toLowerCase(),
      });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const match =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!match) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const token =
      jwt.sign(
        {
          id: user._id,
          userType: user.userType,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

    res.json({
      token,
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
};