const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const router = express.Router();


//Get Movies
router.get('/', async (req, res) => {

    const base = 'https://www.imdb.com/search/title/?'
    const type = 'title_type=feature'
    const release = `&release_date=${req.query.year}-01-01,${req.query.year}-12-31`
    const view = '&view=simple'
    const start = `&start=${req.query.start}`
    // Max is 250
    const count = `&count=${req.query.count}`
    
    const url = base + type + release + view + start + count

    let idArray = []

    request (url, (error, response, html) => {

        if (!error && response.statusCode == 200) {

            const $ = cheerio.load(html);
            $('.lister-item-header').each((i, el) => {
                const id = $(el)
                    .find('a')
                    .attr('href')
                    .replace('/title/', '')
                    .replace('/?ref_=adv_li_tt', '');

                    idArray.push(id)
                    
            });
            res.send(idArray);
        }

    });

    
    
});

module.exports = router;