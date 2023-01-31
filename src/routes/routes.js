const router = require("express").Router();
const register = require("../controller/users/register")
const login = require("../controller/users/login");
const forgot_password = require("../controller/users/forgot_password");
const edit_perfil = require("../controller/users/edit_perfil")
const purchaseHistoric = require('../controller/users/purchaseHistoric');

router.post("/auth/login", login);

router.post("/auth/register", register);

router.post("/auth/forgot_password", forgot_password);

router.get('/edit/:email', edit_perfil.updateUser);

router.post('/perfil', edit_perfil.confirmEdit);

router.post('/buyEvent', purchaseHistoric.buyEvent);

router.post('/getPurchaseHistoric', purchaseHistoric.getPurchaseHistoric);


module.exports = router;