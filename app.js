//imports
const http = require("http");
const fs = require("fs");
const path = require("path");
const util = require("util");

//create to web content
var PAGES = path.join(__dirname,"public","pages");
var CSS = path.join(__dirname,"public","css");
var IMAGES = path.join(__dirname,"public","images");

console.log("Path to web content:")
console.log(`Page content location: ${PAGES}`);
console.log(`Css content location: ${CSS}`);
console.log(`Image content location: ${IMAGES}`);

const server = http.createServer(function(res,req){
    
    
});


server.listen(5000);