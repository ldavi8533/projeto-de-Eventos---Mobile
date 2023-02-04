const router = require("express").Router();
const register = require("../controller/users/register")
const login = require("../controller/users/login");
const forgot_password = require("../controller/users/forgot_password");
const confirmEdit = require("../controller/users/edit_perfil")
const purchaseHistoric = require('../controller/users/purchaseHistoric');
const cardRegister = require('../controller/cardRegister')
const favoriteList = require('../controller/users/favoriteList');

router.post("/auth/login", login);

router.post("/auth/register", register);

router.post("/auth/forgot_password", forgot_password);

router.post('/perfil', confirmEdit);

router.post('/auth/buyEvent', purchaseHistoric.buyEvent);

router.post('/auth/getPurchaseHistoric', purchaseHistoric.getPurchaseHistoric);

router.post('/cardregister', cardRegister);

router.post('/addFavorite', favoriteList.addFavorite);

router.post('/getFavoriteList', favoriteList.getFavoriteList);


module.exports = router;