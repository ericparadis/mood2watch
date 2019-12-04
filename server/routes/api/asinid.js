const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const router = express.Router();


//Get Movies
router.get('/', async (req, res) => {

    const base = 'https://www.imdb.com/search/title/?'
    const type = '?title_type=feature&online_availability=US%2Ftoday%2FAmazon%2Fsubs&view=simple'
    const id = `&start=${req.query.id}`

    const url = base + id

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