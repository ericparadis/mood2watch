const express = require('express');
// const mongodb = require('mongodb');

const upload = require('../services/upload') 

const singleImageUpload = upload.single('image')

const router = express.Router();

//Get Movies
router.post('/', async (req, res) => {

    await singleImageUpload(req, res, function(err) {

        
        return res.json({'imageUrl': req.file.location})
    });

});

module.exports = router;