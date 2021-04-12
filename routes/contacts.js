const express = require('express');
const router = express.Router();

//@route Get api/contacts
//@desc Get all users contacts
//@acesses Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route post api/contacts
//@desc Add new contacts
//@acesses Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

//@route PUT api/contacts:id
//@desc Update contact
//@acesses Private
router.put('/:id', (req, res) => {
  res.send('Update contacts');
});

//@route DELETE api/contacts:id
//@desc Update contact
//@acesses Private
router.delete('/:id', (req, res) => {
  res.send('delete contacts');
});

module.exports = router;
