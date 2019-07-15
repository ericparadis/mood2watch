const express = require('express');
const AWS = require('aws-sdk');
const fs = require('fs');
const https = require('https');

const router = express.Router();

//Get Movie poster and Move it to S3
router.post('/', async (req, res) => {

    const poster = req.body.poster
    const id = req.body.id
    const file = id + '.jpg'

    https.get(poster, res => {
        const ws = res.pipe(fs.createWriteStream(file, function(err) { 
        if (err) throw err; }
        ));
        ws.on('finish', () => {
            console.log('created');
            const path = `./${file}`
            

            //Read in the file, convert it to base64, store to S3
            fs.readFile(path, function (err, data) {
                if (err) { throw err; }
                var base64data = new Buffer(data, 'binary');
                console.log(base64data);
                var s3 = new AWS.S3();
                s3.upload({
                    Bucket: 'mood2watch',
                    Key: file,
                    Body: base64data,
                    ACL: 'public-read',
                    ContentType: 'image/jpg',
                    CacheControl: 'max-age=31536000',
                },function (resp) {
                    console.log(arguments[1].Location);
                    console.log('Successfully uploaded package.');
                    fs.unlink(file, function (err) {
                        if (err) throw err; 
                    }); 
                    console.log('deleted');
                });

            })
        })
    })
    res.send(file)
});

module.exports = router;