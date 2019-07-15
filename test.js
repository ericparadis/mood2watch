const AWS = require('aws-sdk');
const fs = require('fs');
const https = require('https');

const poster = 'https://m.media-amazon.com/images/M/MV5BYTFkM2ViMmQtZmI5NS00MjQ2LWEyN2EtMTI1ZmNlZDU3MTZjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'

https.get(poster, res => {
    const ws = res.pipe(fs.createWriteStream('test.jpg', function(err) { 
      if (err) throw err; }
    ));
    ws.on('finish', () => {
      console.log('created');

      //Read in the file, convert it to base64, store to S3
      fs.readFile('test.jpg', function (err, data) {
        if (err) { throw err; }
        
        var base64data = new Buffer(data, 'binary');

        console.log(base64data);

        var s3 = new AWS.S3();
        s3.upload({
          Bucket: 'mood2watch',
          Key: 'test-s3.jpg',
          Body: base64data,
          ACL: 'public-read',
          ContentType: 'image/jpg',
          CacheControl: 'max-age=31536000',
        },function (resp) {
          console.log(arguments[1].Location);
          console.log('Successfully uploaded package.');
          
          fs.unlink('test.jpg', function (err) {
            if (err) throw err; 
          }); 
          console.log('deleted');
        });



    })
  })
})