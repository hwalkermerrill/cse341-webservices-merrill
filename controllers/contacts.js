//Requirements
const Contact = require('../models/Contact');

// Controller functions
// Order: Get, Post, Put, Delete
const getContacts = (req, res, next) => {
  Contact.find()
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((err) => {
      console.error('Error fetching contacts:', err);
      res.status(500).json({ message: 'Server error retrieving contacts' });
    });
};

const getContactById = (req, res, next) => {
  const id = req.params.id;

  Contact.findById(id)
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(200).json(contact);
    })
    .catch((err) => {
      console.error('Error fetching contact by ID:', err);
      res.status(500).json({ message: 'Server error retrieving contact' });
    });
};

const createContact = (req, res, next) => {
  const newContact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  });
  console.log("POST /contacts hit, body:", req.body);

  newContact.save()
    .then((result) => {
      res.status(201).json({ id: result._id });
    })
    .catch((err) => {
      console.error('Error creating contact:', err);
      res.status(500).json({ message: 'Server error creating contact' });
    });
};

const updateContact = (req, res, next) => {
  const id = req.params.id;

  Contact.findByIdAndUpdate(
    id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    },
    { new: true }
  )
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(204).send();
    })
    .catch((err) => {
      console.error('Error updating contact:', err);
      res.status(500).json({ message: 'Server error updating contact' });
    });
};

const deleteContact = (req, res, next) => {
  const id = req.params.id;

  Contact.findByIdAndDelete(id)
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(200).json({ message: 'Contact deleted' });
    })
    .catch((err) => {
      console.error('Error deleting contact:', err);
      res.status(500).json({ message: 'Server error deleting contact' });
    });
};

// Exports
module.exports = { getContacts, getContactById, createContact, updateContact, deleteContact };