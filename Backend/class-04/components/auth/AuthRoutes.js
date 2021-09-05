const express = require('express');
const router = express.Router();

const {signup} = require('./AuthController');

// Simple Function
router.get('/', function(req, res) {
    res.send("Auth Routes are Working...");
});

// Arrow Functions
router.post('/login', (req, res) => {
    res.send("Login Route");
});

router.post('/signup', (req, res) => {
    signup(req, res);
});

module.exports = router;