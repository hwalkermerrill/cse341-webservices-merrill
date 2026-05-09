// Constants on top
const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

// GET routes
routes.get('/', contactsController.getContacts);
routes.get('/:id', contactsController.getContactById);

// POST, PUT, DELETE routes
routes.post('/', contactsController.createContact);
routes.put('/:id', contactsController.updateContact);
routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;