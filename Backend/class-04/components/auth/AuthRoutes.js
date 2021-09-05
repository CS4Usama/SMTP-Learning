const express = require('express');
const router = express.Router();

// Simple Function
router.get('/', function(req, res) {
    res.send("Auth Routes are Working...");
});

// Arrow Function
router.get('/login', (req, res) => {
    res.send("Login Route");
});

module.exports = router;