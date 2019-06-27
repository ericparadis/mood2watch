const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Tags
router.get('/', async (req, res) => {
    const tags = await loadTagCollection();
    const count = parseInt(req.query.count) || 10;
    const page = parseInt(req.query.page) || 1;
    res.send(await tags.find({}).sort( { rank: 1 } ).skip(count*(page-1)).limit(count).toArray());
});

//Get Tag by ID
// router.get('/:id', async (req, res) => {
//     const tags = await loadTagCollection();
//     res.send(await tags.findOne());
// });

//Get Tag by tagUrl
router.get('/:tagUrl', async (req, res) => {
    const tags = await loadTagCollection();
    res.send(await tags.findOne({tagUrl: req.params.tagUrl}));
});

//Add Tag
router.post('/', async (req, res) => {
    const tags = await loadTagCollection();
    await tags.insertOne({
        rank: req.body.rank,
        name: req.body.name,
        tagUrl: req.body.tagUrl,
        headline: req.body.headline,
        subhead: req.body.subhead,
        featured: req.body.featured,
        createdAt: new Date()
    });
    res.status(201).send();
});

//Update Tag by ID
router.put('/:id', async (req, res) => {
    const tags = await loadTagCollection();
    await tags.updateOne({_id: new mongodb.ObjectID(req.params.id)},{$set: {
        rank: req.body.rank,
        name: req.body.name,
        tagUrl: req.body.tagUrl,
        headline: req.body.headline,
        subhead: req.body.subhead,
        featured: req.body.featured,
    }});
    res.status(200).send();
});

//Delete Tag
router.delete('/:id', async (req, res) => {
    const tags = await loadTagCollection();
    await tags.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadTagCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://mfuser123:mfuser123@ds155815.mlab.com:55815/merefacade_v1', {
        useNewUrlParser: true
    });
    return client.db('merefacade_v1').collection('tags');
}

module.exports = router;