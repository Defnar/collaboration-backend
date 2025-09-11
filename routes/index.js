const e = require("express");
const userRoutes = require("./userRoutes");
const cartRoutes = require("./cartRoutes")
const router = e.Router();

//api...
router.use("/users", userRoutes);

router.use(authMiddleware);

router.use("/cart", cartRoutes);

router.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});
module.exports = router;
