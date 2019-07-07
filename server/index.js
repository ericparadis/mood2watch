const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// if (!config.get('jwtPrivateKey')) {
//     console.error('FATAL ERROR: jwtPrivateKey is not defined');
//     process.exit(1);
// }

const app = express();

//Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

const movies = require('./routes/api/movies');
const imdbid = require('./routes/api/imdbid');
const primeid = require('./routes/api/primeid');
const posters = require('./routes/api/posters');
const upload = require('./routes/api/upload');
const tags = require('./routes/api/tags');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');

app.use('/api/movies', movies);
app.use('/api/imdbid', imdbid);
app.use('/api/primeid', primeid);
app.use('/api/posters', posters);
app.use('/api/upload', upload);
app.use('/api/tags', tags);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);

// Handle Production

if(process.env.NODE_ENV === 'production') {
    // Static Folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA 
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
