const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


//Get Movies
router.get('/', async (req, res) => {
    const movies = await loadMovieCollection();

    const by = req.query.by || 'year';
    const title = req.query.title;
    const count = parseInt(req.query.count) || 10;
    const page = parseInt(req.query.page) || 1;
    const year = req.query.year || 'all';

    const AngerValue = req.query.anger;
    const AnticipationValue = req.query.anticipation;
    const JoyValue = req.query.joy;
    const TrustValue = req.query.trust;
    const FearValue = req.query.fear;
    const SurpriseValue = req.query.surprise;
    const SadnessValue = req.query.sadness;
    const DisgustValue = req.query.disgust;

    const word = req.query.word

    const imdbId = req.query.imdbId;
    const sortValue = req.query.sort || 'Title';
    const order = req.query.order || 1;

    if (by === 'year') {
        if (year === 'all') {
            res.send(await movies
                .find({})
                .skip(count*(page-1))
                .limit(count)
                .sort( { [sortValue] : order } )
                .toArray());
        } else {
            res.send(await movies
                .find({"Released" : {$regex : year}})
                .skip(count*(page-1))
                .limit(count)
                .sort( { [sortValue] : order } )
                .toArray());
        }
    }

    if (by === 'random') {
        res.send(await movies.aggregate([{ $sample: { size: 1 } }]).toArray());
    }
    if (by === 'imdbId') {
        res.send(await movies.find({"imdbID": imdbId }).toArray());
    }
    if (by === 'word') {
        
        const words = await loadWordsCollection()
        const wordMoods = await words
            .find({ "word" : word })
            .toArray();

            res.send(await movies
                .aggregate([
                    {$match: {"Anger" : { $exists: true }}},
                    {$project: {
                        TotalDiff: {$add: [
                            {$abs: {$subtract: [{$toInt: wordMoods[0].Anger}, {$toInt: "$Anger"}]}},
                            {$abs: {$subtract: [{$toInt: wordMoods[0].Anticipation}, {$toInt: "$Anticipation"}]}},
                            {$abs: {$subtract: [{$toInt: wordMoods[0].Joy}, {$toInt: "$Joy"}]}},
                            {$abs: {$subtract: [{$toInt: wordMoods[0].Trust}, {$toInt: "$Trust"}]}},
                            {$abs: {$subtract: [{$toInt: wordMoods[0].Fear}, {$toInt: "$Fear"}]}},
                            {$abs: {$subtract: [{$toInt: wordMoods[0].Surprise}, {$toInt: "$Surprise"}]}},
                            {$abs: {$subtract: [{$toInt: wordMoods[0].Sadness}, {$toInt: "$Sadness"}]}},
                            {$abs: {$subtract: [{$toInt: wordMoods[0].Disgust}, {$toInt: "$Disgust"}]}},
                        ]},
                        doc: '$$ROOT'}},
                    {$sort: {TotalDiff: 1}}
                ])
                .skip(count*(page-1))
                .limit(count)
                .toArray());


    }
    if (by === 'mood') {
        res.send(await movies
            .aggregate([
                {$match: {"Anger" : { $exists: true }}},
                {$project: {
                    TotalDiff: {$add: [
                        {$abs: {$subtract: [{$toInt: AngerValue}, {$toInt: "$Anger"}]}},
                        {$abs: {$subtract: [{$toInt: AnticipationValue}, {$toInt: "$Anticipation"}]}},
                        {$abs: {$subtract: [{$toInt: JoyValue}, {$toInt: "$Joy"}]}},
                        {$abs: {$subtract: [{$toInt: TrustValue}, {$toInt: "$Trust"}]}},
                        {$abs: {$subtract: [{$toInt: FearValue}, {$toInt: "$Fear"}]}},
                        {$abs: {$subtract: [{$toInt: SurpriseValue}, {$toInt: "$Surprise"}]}},
                        {$abs: {$subtract: [{$toInt: SadnessValue}, {$toInt: "$Sadness"}]}},
                        {$abs: {$subtract: [{$toInt: DisgustValue}, {$toInt: "$Disgust"}]}},
                    ]},
                    doc: '$$ROOT'}},
                {$sort: {TotalDiff: 1}}
            ])
            .skip(count*(page-1))
            .limit(count)
            .toArray());
    }
    if (by === 'title') {
        res.send(await movies
            .find({"Title": {$regex : title} })
            .sort({"imdbRating": -1})
            .skip(count*(page-1))
            .limit(count)
            .toArray());
    }
    if (by === 'prime') {
        const windows = await loadWindowsCollection()
        const prime = await windows
            .find({ "name" : "prime" })
            .toArray();

        res.send(await movies
            .find({"imdbID": { $in: prime[0].ids } })
            .sort({"imdbRating": -1})
            .skip(count*(page-1))
            .limit(count)
            .toArray());
    }
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
    await movies.updateOne({_id: new mongodb.ObjectID(req.params.id)},{$set: req.body});
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

async function loadWindowsCollection() {
    const client = await mongodb.MongoClient
    .connect('mongodb+srv://mood:mood@cluster0-nei35.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('mood2watch').collection('windows'); 
}

async function loadWordsCollection() {
    const client = await mongodb.MongoClient
    .connect('mongodb+srv://mood:mood@cluster0-nei35.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('mood2watch').collection('words'); 
}

module.exports = router;