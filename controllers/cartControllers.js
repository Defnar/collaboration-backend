const User = require("../models/User");

const updateCart = async (req, res) => {
  if (!req.user) return res.status(401).json({ message: "User not logged in" });

  const { cart } = req.body;
  if (!Array.isArray(cart)) {
    return res.status(400).json({ message: "Cart must be an array" });
  }

  try {
    console.log(req.user._id);
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { cart: cart },
      { new: true }
    );

    console.log(user);
    return res.json({ cart: cart });
  } catch (err) {
    console.error("Error updating cart:", err);
    return res.status(500).json({ error: "Failed to update cart" });
  }
};

module.exports = { updateCart };
