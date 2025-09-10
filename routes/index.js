const e = require("express");
const userRoutes = require("./userRoutes")
const router = e.Router();

//api...
router.use("/users", userRoutes);

module.exports = router;