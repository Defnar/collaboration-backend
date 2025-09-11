const e = require("express");
const userRoutes = require("./userRoutes");
const cartRoutes = require("./cartRoutes")
const {authMiddleware} = require("../middleware/auth")
const axios = require("axios");
const router = e.Router();

//api...
router.use("/users", userRoutes);

router.get("/products", async (req, res) => {
  try {
    console.log("product fetch called");
    const response = await axios.get("https://fakestoreapi.com/products");
    
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.use(authMiddleware);

router.use("/cart", cartRoutes);
module.exports = router;
