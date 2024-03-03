const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const loginController = require('./controllers/loginController');

//Rotas da home
route.get('/', homeController.homePage);

//Rotas de login
route.get('/login', loginController.loginPage);
route.post('/login', loginController.registred);

module.exports = route;