const express = require('express');
const RouteController = require('./controllers/RouteController')
const routes = express.Router();

routes.get('/routes',  RouteController.index);
routes.post('/route', RouteController.store);

module.exports = routes;
