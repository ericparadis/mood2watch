const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


//Get Movies
router.get('/', async (req, res) => {
    const movies = await loadMovieCollection();
    const count = parseInt(req.query.count) || 10;
    const page = parseInt(req.query.page) || 1;
    const year = req.query.year || 'all';
    const sortValue = req.query.sort || 'Title';
    const order = req.query.order || 1;
    if (year === 'all') res.send(await movies
        .find({})
        .skip(count*(page-1))
        .limit(count)
        .sort( { [sortValue] : order } )
        .toArray());
    else res.send(await movies
        .find({"Released" : {$regex : year}})
        .skip(count*(page-1))
        .limit(count)
        .sort( { [sortValue] : order } )
        .toArray());

});

//Get Movie by ID
router.get('/:id', async (req, res) => {
    const movies = await loadMovieCollection();
    res.send(await movies.findOne({_id: new mongodb.ObjectID(req.params.id)}));
});


//Add Movie
router.post('/', async (req, res) => {
    const movies = await loadMovieCollection();
    await movies
        .insertOne({
            imdbId: req.body.imdbId,
            Actors: req.body.Actors,
            Awards: req.body.Awards,
            BoxOffice: req.body.BoxOffice,
            Country: req.body.Country,
            DVD: req.body.DVD,
            Director: req.body.Director,
            Genre: req.body.Genre,
            Language: req.body.Language,
            Metascore: req.body.Metascore,
            Plot: req.body.Plot,
            Poster: req.body.Poster,
            Production: req.body.Production,
            Rated: req.body.Rated,
            Ratings: req.body.Ratings,
            Released: req.body.Released,
            Response: req.body.Response,
            Runtime: req.body.Runtime,
            Title: req.body.Title,
            Type: req.body.Type,
            Website: req.body.Website,
        });
    res.status(201)
    .send();
});


//Add Many Movies
router.post('/many', async (req, res) => {
    const movies = await loadMovieCollection();
    await movies.insertMany(req.body);
    
    res.status(201).send();
});

//Update Movie by ID
router.put('/:id', async (req, res) => {
    const movies = await loadMovieCollection();
    await movies.updateOne({_id: new mongodb.ObjectID(req.params.id)},{$set: {name: req.body.name, tag: req.body.tag, type: req.body.type}});
    res.status(200).send();
});

//Delete Movie
router.delete('/:id', async (req, res) => {
    const movies = await loadMovieCollection();
    await movies.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadMovieCollection() {
    const client = await mongodb.MongoClient
    .connect('mongodb+srv://mood:mood@cluster0-nei35.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('mood2watch').collection('movies');
    
}



module.exports = router;