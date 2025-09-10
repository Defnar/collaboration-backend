const e = require("express");
const { login, register } = require("../controllers/userControllers");
const router = e.Router();

router.use("/login", login);
router.use("/register", register);

module.export = router;
