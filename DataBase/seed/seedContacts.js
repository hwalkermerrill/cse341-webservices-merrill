const fs = require('fs');
const path = require('path');

const mongoose = require('../connection');
const Contact = require('../../models/Contact');

async function seedContacts() {
  try {
    // Load the JSON file
    const filePath = path.join(__dirname, 'contacts.json');
    const raw = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(raw);

    // Convert object-of-objects → array
    const contactsArray = Object.values(json);

    // Insert into MongoDB
    await Contact.insertMany(contactsArray);

    console.log('Contacts imported successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error importing contacts:', err);
    process.exit(1);
  }
}

seedContacts();