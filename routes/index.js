const e = require("express");
const userRoutes = require("./userRoutes");
const { authMiddleware } = require("../middleware/auth");
const cartRoutes = require("./cartRoutes");
const router = e.Router();

//api...
router.use("/users", userRoutes);

router.use(authMiddleware);

router.use("/cart", cartRoutes);

module.exports = router;