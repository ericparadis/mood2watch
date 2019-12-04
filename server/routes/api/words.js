const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Words
router.get('/', async (req, res) => {
    const words = await loadWordCollection();
    const count = parseInt(req.query.count) || 10;
    const page = parseInt(req.query.page) || 1;
    res.send(await words.find({}).skip(count*(page-1)).limit(count).toArray());
});

//Get Word by channel
router.get('/:id', async (req, res) => {
    const words = await loadWordCollection();
    res.send(await words.findOne({channel: req.params.id}));
});


//Add Word
router.post('/', async (req, res) => {
    const words = await loadWordCollection();
    await words.insertOne({
        word: req.body.word,
        Anger: req.body.Anger,
        Anticipation: req.body.Anticipation,
        Joy: req.body.Joy,
        Trust: req.body.Trust,
        Fear: req.body.Fear,
        Surprise: req.body.Surprise,
        Sadness: req.body.Sadness,
        Disgust: req.body.Disgust,

        createdAt: new Date()
    });
    res.status(201).send();
});

//Update Word by ID
router.put('/:id', async (req, res) => {
    const words = await loadWordCollection();
    await words.updateOne({_id: new mongodb.ObjectID(req.params.id)},{$set: req.body});
    res.status(200).send();
});

//Delete Word
router.delete('/:id', async (req, res) => {
    const words = await loadWordCollection();
    await words.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadWordCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://mood:mood@cluster0-nei35.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('mood2watch').collection('words');
}

module.exports = router;