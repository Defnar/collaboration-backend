const e = require("express");
const { getCart, addToCart, deleteFromCart } = require("../controllers/cartControllers");
const router = e.Router();


router.get("/", getCart);
router.put("/:id", addToCart);
router.delete("/:id", deleteFromCart);


module.exports = router;