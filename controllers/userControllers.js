const User = require("../models/User");

const register = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "body cannot be empty" });

    await User.create(req.body);

    res.status(201).json({ message: "User created!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "Body cannot be empty" });

    const { email, password } = req.body;

    const user = await User.find({ email: email });

    if (!email || !password)
      return res.status(400).json({ message: "email/password missing" });

    if (!user || !user.isCorrectPassword(password))
      return res.status(403).json({ message: "email or password is wrong" });

    req.user = user;
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {register, login};