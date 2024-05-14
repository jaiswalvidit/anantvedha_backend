// contactRoutes.js

const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact'); // Import your Contact model or schema here

// POST route to store contact details
router.post('/contact', async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      message
    });

    // Save the contact details to the database
    await newContact.save();

    // Respond with success message
    res.status(201).json({ message: 'Contact details stored successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error storing contact details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
