const express = require('express');
const router = express.Router();

const {createOrder, getOrder, updateOrder} = require('./OrdersController');
// kisi Route ko login ky baghair na chalny dena is lye usky params mein verifyToken pass karain gy
const verifyToken = require('../../middleware/AuthMiddleware');


router.get('/', (req, res) => {
    res.json("Order Route is Working");
});

router.post('/create-order', verifyToken, (req, res) => {
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