const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get User by ID public info
router.get('/:id', async (req, res) => {
    const users = await loadUserCollection();
    const user = await users.findOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send({
        name: user.name,
        icon: user.icon,
        likes: user.likes,
        designs: user.designs,
    });
});

async function loadUserCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://mfuser123:mfuser123@ds155815.mlab.com:55815/merefacade_v1', {
        useNewUrlParser: true
    });
    return client.db('merefacade_v1').collection('users');
}

module.exports = router;