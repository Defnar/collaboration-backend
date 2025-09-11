const e = require("express");
const { updateCart } = require("../controllers/cartControllers");
const router = e.Router();


router.put("/", updateCart);


module.exports = router;