// Constants on top
const routes = require('express').Router();
const myController = require('../controllers/index');

// Data to Display
routes.get('/', myController.knownNameFunction);
routes.use('/contacts', require('./contacts'));

module.exports = routes;