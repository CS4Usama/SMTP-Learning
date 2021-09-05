const express = require('express');
const router = express.Router();

const {createOrder, getOrder, updateOrder} = require('./OrdersController');


router.get('/', (req, res) => {
    res.json("Order Route is Working");
});

router.post('/create-order', (req, res) => {
    createOrder(req, res);
});

router.put('/update-order', (req, res) => {
    updateOrder(req, res);
});

router.get('/get-order', (req, res) => {
    // DB
    getOrder(req, res);
});

module.exports = router;