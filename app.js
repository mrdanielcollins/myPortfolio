/*
This is the main app for starting the server, functionalities include:
Starting server, seting up routes to pages, serving html content to user

Developer: Daniel Collins
Date: 5/13/17
*/


//imports
const http = require("http");
const fs = require("fs");
const path = require("path");
const util = require("util");
const express = require("express");

//set objects
const app = express()

//set global varibles
var port = 5000;


//create to web content
var PAGES = path.join(__dirname,"public");
var CSS = path.join(__dirname,"public","css");
var IMAGES = path.join(__dirname,"public","images");

//print messages to console showing the web content paths
console.log("Path to web content:")
console.log(`Page content location: ${PAGES}`);
console.log(`Css content location: ${CSS}`);
console.log(`Image content location: ${IMAGES}`);

//if app recieves a request for home page, serve home page
app.get('/',function(req, res){
    HOME_PAGE = path.join(PAGES,"home.html");
    Style_CSS = path.join(CSS, "style.css");
    res.sendFile(HOME_PAGE);
});

//uses files contained in public folder css,js, images...
app.use(express.static('public'))

// start app listening to port
app.listen(port, function(){
    console.log(`listening to port ${port}`);
});