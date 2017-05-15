var request = require('request');
var cheerio = require('cheerio');
var searchTerm = 'screen+scraping';
var url = 'https://www.indeed.com/jobs?q=software+engineer&l=New+York%2C+NY';
var title = 'https://www.indeed.com';

var page = {
    host: 'https://www.indeed.com',
    port: 80,
    path: ''
};

//request page and get all the urls
function getPageURL() {
    request(url, function (err, resp, body) {

        //load body of the page
        $ = cheerio.load(body);

        //jquery get all hyperlinks
        links = $('a');

        $(links).each(function (i, link) {

            //Write each link as a text
            console.log('***************************')
            console.log($(link).attr('href'));
            console.log(i);

            //Open links page 
        });

    });
}

getPageURL();

