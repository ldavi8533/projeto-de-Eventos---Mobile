const router = require("express").Router();
const register = require("../controller/users/register")
const login = require("../controller/users/login")

router.post("/auth/login", login);

router.post("/auth/register", register);


module.exports = router;