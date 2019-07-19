const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Windows
router.get('/', async (req, res) => {
    const windows = await loadWindowCollection();
    const count = parseInt(req.query.count) || 10;
    const page = parseInt(req.query.page) || 1;
    res.send(await windows.find({}).skip(count*(page-1)).limit(count).toArray());
});

//Get Window by channel
router.get('/:channel', async (req, res) => {
    const windows = await loadWindowCollection();
    res.send(await windows.findOne({channel: req.params.channel}));
});

//Add Window
router.post('/', async (req, res) => {
    const windows = await loadWindowCollection();
    await windows.insertOne({
        name: req.body.name,
        ids: req.body.ids,
        createdAt: new Date()
    });
    res.status(201).send();
});

//Update Window by ID
router.put('/:id', async (req, res) => {
    const windows = await loadWindowCollection();
    await windows.updateOne({_id: new mongodb.ObjectID(req.params.id)},{$set: req.body});
    res.status(200).send();
});

//Delete Window
router.delete('/:id', async (req, res) => {
    const windows = await loadWindowCollection();
    await windows.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadWindowCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://mood:mood@cluster0-nei35.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('mood2watch').collection('windows');
}

module.exports = router;