const e = require("express");
const { login, register } = require("../controllers/userControllers");
const router = e.Router();

router.post("/login", login);
router.post("/register", register);

module.exports = router;