const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


//Auth User
router.post('/', async (req, res) => {
    const users = await loadUserCollection();
    let user = await users.findOne({ email: req.body.email });
    
    //check if email valid
    if (!user) return res.status(400).send('Invalid email or password.');

    //check if passiword valid
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    //create jwt token
    const id = new mongodb.ObjectID(user._id);
    const token = jwt.sign({
        _id: id,
        email: user.email,
        role: user.role,
    }, config.get('jwtPrivateKey'));
    
    //create jwt token
    res.send(token);
});


async function loadUserCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://mfuser123:mfuser123@ds155815.mlab.com:55815/merefacade_v1', {
        useNewUrlParser: true
    });
    return client.db('merefacade_v1').collection('users');
}

module.exports = router;