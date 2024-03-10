const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');


//Rotas da home
route.get('/', homeController.homePage);
route.post('/', homeController.post);

route.get('/homePage2', homeController.homePage2);

module.exports = route;