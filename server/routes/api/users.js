const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get All Users
router.get('/', async (req, res) => {
    const users = await loadUserCollection();
    const count = parseInt(req.query.count) || 10;
    const page = parseInt(req.query.page) || 1;
    const role = req.query.role || 'all';
    if (role === 'all') res.status(200).send(await users.find({}).skip(count*(page-1)).limit(count).toArray());
    else res.status(200).send(await users.find({"role" : role}).skip(count*(page-1)).limit(count).toArray());
});


//Get User by ID private info
router.get('/me', auth, async (req, res) => {
    const users = await loadUserCollection();
    const id = new mongodb.ObjectID(req.user._id);
    const user = await users.findOne(id)
    res.status(200).send({
        _id: user._id,
        email: user.email,
        role: user.role,
        name: user.name,
        icon: user.icon,
        likes: user.likes,
        designs: user.designs,
        orders: user.orders,
    });
});


//Add User
router.post('/', async (req, res) => {

    //check if email already exists
    const users = await loadUserCollection();
    let user = await users.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');
    
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);

    //insert the new user
    const newUser = await users.insertOne({
        icon: req.body.icon,
        name: req.body.name,
        email: req.body.email,
        password: hashed,
        createdAt: new Date(),
        role: req.body.role
    });

    const id = new mongodb.ObjectID(newUser._id);

    //create the jwt token
    const token = jwt.sign({
        _id: id,
        role: req.body.role
    }, config.get('jwtPrivateKey'));

    //return the token
    res.status(201).send(token);
});

// res.header('x-auth-token', token).status(201).send({_id: id, email: req.body.email});

//Update User by ID
router.put('/:id', async (req, res) => {
    const users = await loadUserCollection();
    await users.updateOne({_id: new mongodb.ObjectID(req.params.id)},{$set: req.body });
    res.status(200).send();
});


//Delete User by ID
router.delete('/:id', async (req, res) => {
    const users = await loadUserCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadUserCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://mfuser123:mfuser123@ds155815.mlab.com:55815/merefacade_v1', {
        useNewUrlParser: true
    });
    return client.db('merefacade_v1').collection('users');
}

module.exports = router;