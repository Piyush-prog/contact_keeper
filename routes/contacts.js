const express = require('express');
const config = require('config');
const User = require('../models/User');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');


const router = express.Router();


// @route   GET    api/contacts
//@desc     Get all users contacts
//@access   Private
router.get('/', auth, async (req, res) => {
    try {

        const contacts = await Contact.find({user: req.user.id}).sort({date: -1});
        res.json(contacts);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   POST    api/contacts
//@desc     Add new contact
//@access   Private
router.post('/', (req, res) => {
    res.send('Add new contact.');
});


// @route   PUT    api/contacts
//@desc     Update a contact
//@access   Private
router.put('/', (req, res) => {
    res.send('Update contact');
});


// @route   DELETE    api/contacts
//@desc     Delete a contact
//@access   Private
router.delete('/', (req, res) => {
    res.send('Delete a contact');
});

module.exports = router;