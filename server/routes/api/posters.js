const express = require('express');
const mongodb = require('mongodb');
const https = require('https'); 
const fs = require('fs'); 
const AWS = require('aws-sdk');
// const path = require('path');
// const uuid = require('uuid')

const router = express.Router();

//Get Movie poster and Move it to S3
router.get('/', async (req, res) => {

    const posterURL = req.body.poster
    const name = req.body.name

    const fileName = './images/' + name + '.jpg'

    await https.get(posterURL, function(result) {
        var data = [];
        result.on('data', function(chunk) {
            data.push(chunk);
        }).on('end', function() {
            //at this point data is an array of Buffers
            //so Buffer.concat() can make us a new Buffer
            //of all of them together
            const buffer = Buffer.concat(data);
            fs.writeFile(fileName, buffer, 'binary', function(err){
                if (err) throw err
            })
        });
    });

    res.send('success')
});  
    
module.exports = router;