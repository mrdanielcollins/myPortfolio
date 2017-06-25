//Requare Objects
var request = require('request');
var cheerio = require('cheerio');
var HashTable = require('hashtable');

//Global Variables
var searchTerm = 'screen+scraping';
var url = 'https://www.indeed.com/jobs?q=software+engineer&l=New+York%2C+NY';
var title = 'https://www.indeed.com';
var hashtable = new HashTable();

var page = {
    host: 'https://www.indeed.com',
    port: 80,
    path: ''
};

//request page and get all the urls for pages for Job Descriptsion
function getPageURL() {
    request(url, function (err, resp, body) {

        //load body of the page
        $ = cheerio.load(body);

        //jquery get all atributes
        links = $('a');

        $(links).each(function (i, link) {

            //Get Atributes 
            var elementLink = $(link).attr('data-tn-element');
            var newLink = $(link).attr('href');

            //If the element and herf atributes are not undefined
            if(elementLink != undefined && newLink != undefined){
                //If it is a jobTitle
                if(elementLink == 'jobTitle'){
                    var newLink = title + newLink;
                    //console.log('***************************')
                    //console.log(newLink);
                    //console.log(i); 
                    getMostCommonSkills(newLink);                   
               }
            }
        });

    });
}

function getMostCommonSkills(link){
    request(link, function (err, resp, body) {
        //load body of the page
        $ = cheerio.load(body);

        //jquery get all paragraphs
        paragraphs = $('p');

        $(paragraphs).each(function (i, paragraph) {
            console.log("************************************");
            paragraph.children.forEach(function(element) {
                console.log("+++++++++++++++++++++++++++++++++");
                console.log(element.data);
            });
            
        });


    });
}

getPageURL();

