const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');

route.get('/', homeController.pagInicial);
route.post('/', homeController.pagInicialPost);

module.exports = route