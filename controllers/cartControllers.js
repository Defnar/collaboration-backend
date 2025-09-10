const User = require("../models/User");

const addToCart = async (req, res) => {
  const id = req.params.id;

  const product = req.product //will need to be changed based on how product routes are set up

  if (req.user.cart.some((item) => item.id === id)) {
    return res.status(400).json({ message: "Item already in cart" });
  }

  req.user.cart.push(product);
  try {
    await User.findByIdAndUpdate(req.user._id, req.user.cart);

    res.json({message: "Cart successfully updated"});
  }
  catch (err) {
    res.json({error: err.message})
    console.log(err);
  }
};
