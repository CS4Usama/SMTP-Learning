const express = require('express');
const router = express.Router();

const {signup, login} = require('./AuthController');

// Simple Function
router.get('/', function(req, res) {
    res.send("Auth Routes are Working...");
});

// Arrow Functions
router.post('/login', (req, res) => {
    login(req, res);
});

router.post('/signup', (req, res) => {
    signup(req, res);
});

module.exports = router;