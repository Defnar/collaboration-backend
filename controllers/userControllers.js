const User = require("../models/User");

const login = async (req, res) => {
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
