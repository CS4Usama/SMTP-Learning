const express = require('express');
const router = new express.Router();

const MensRanking = require('../models/menSchema');

// Handling a POST Request
router.post('/mens', async(req,res) => {
    try {
        const addingData = new MensRanking(req.body);
        const newData = await addingData.save();
        res.status(201).send(newData);
    } catch(err) {
        res.status(400).send(err);
    }
});

// GET Request
router.get('/mens', async(req,res) => {
    try {
        const getAllData = await MensRanking.find({}).sort({'ranking':1});
        res.send(getAllData);
    } catch(err) {
        res.status(400).send(err);
    }
});

// Individual GET Request
router.get('/mens/:id', async(req,res) => {
    try {
        const _id = req.params.id;
        const getData = await MensRanking.findById({_id: _id});
        res.send(getData);
    } catch(err) {
        res.status(400).send(err);
    }
});

// PATCH Request
router.patch('/mens/:id', async(req,res) => {
    try {
        const _id = req.params.id;
        const getData = await MensRanking.findByIdAndUpdate({_id: _id}, req.body, {
            new: true
        });
        res.send(getData);
    } catch(err) {
        res.status(500).send(err);
    }
});

// DELETE Request
router.delete('/mens/:id', async(req,res) => {
    try {
        // const getData = await MensRanking.findByIdAndDelete(req.params.id);
        const _id = req.params.id;
        const getData = await MensRanking.findByIdAndDelete(_id);
        // const getData = await MensRanking.findByIdAndDelete({_id: _id});
        res.send(getData);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
