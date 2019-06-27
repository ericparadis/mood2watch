const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


//Get Shapes
router.get('/', async (req, res) => {
    const shapes = await loadShapeCollection();
    const count = parseInt(req.query.count) || 10;
    const page = parseInt(req.query.page) || 1;
    const tag = req.query.tag || 'all';
    if (tag === 'all') res.send(await shapes.find({}).skip(count*(page-1)).limit(count).toArray());
    else res.send(await shapes.find({"tag" : tag}).skip(count*(page-1)).limit(count).toArray());
});

//Get Shape by ID
router.get('/:id', async (req, res) => {
    const shapes = await loadShapeCollection();
    res.send(await shapes.findOne({_id: new mongodb.ObjectID(req.params.id)}));
});

//Add Shape

router.post('/', async (req, res) => {
    const shapes = await loadShapeCollection();
    await shapes.insertOne({
        name: req.body.name,
        radius: req.body.radius,
        type: req.body.type,
        data: req.body.data,
        tag: req.body.tag,
        createdAt: new Date()
    });
    res.status(201).send();
});

//Update Shape by ID
router.put('/:id', async (req, res) => {
    const shapes = await loadShapeCollection();
    await shapes.updateOne({_id: new mongodb.ObjectID(req.params.id)},{$set: {name: req.body.name, tag: req.body.tag, type: req.body.type}});
    res.status(200).send();
});

//Delete Shape
router.delete('/:id', async (req, res) => {
    const shapes = await loadShapeCollection();
    await shapes.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadShapeCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://mfuser123:mfuser123@ds155815.mlab.com:55815/merefacade_v1', {
        useNewUrlParser: true
    });
    return client.db('merefacade_v1').collection('shapes');
}

module.exports = router;