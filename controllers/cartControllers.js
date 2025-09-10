const User = require("../models/User");

const getCart = (req, res) => {
  if (!req.user) res.status(401).json({ message: "User not logged in" });
  if (req.user.cart.length === 0) res.json({ message: "No items found" });
  res.json(req.user.cart);
};

const addToCart = async (req, res) => {
  if (!req.user) res.status(401).json({ message: "User not logged in" });
  const id = req.params.id;

  const { product } = req.body; //will need to be changed based on how product routes are set up

  if (req.user.cart.some((item) => item.id === id)) {
    return res.status(400).json({ message: "Item already in cart" });
  }

  req.user.cart.push(product);
  try {
    await User.findByIdAndUpdate(req.user._id, { cart: req.user.cart });

    res.json({ message: "Cart successfully updated" });
  } catch (err) {
    res.json({ error: err.message });
    console.log(err);
  }
};

const deleteFromCart = async (req, res) => {
  if (!req.user) res.status(401).json({ message: "User not logged in" });
  const id = req.params.id;

  req.user.cart = req.user.cart.filter((item) => item.id !== id);

  try {
    await User.findByIdAndUpdate(req.user._id, { cart: req.user.cart });

    res.json({ message: "Item successfully deleted from cart" });
  } catch (err) {
    res.json({ error: err.message });
    console.log(err);
  }
};

module.exports = { getCart, addToCart, deleteFromCart };
