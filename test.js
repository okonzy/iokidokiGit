var http = require('http');
console.log(http)
var express = require('express');
var app = express();
// var jsonData = {count: 12, message: 'hey'};

// On Get request to the URL
app.get('/todos', function(req, res){

});

// On Post request to the same URL
app.post('/todos', function(req, res){

});

// Start server on port 3000
app.listen(3000);

// var jsonData = {count: 12, message: 'Great Job Chris'};
// console.log(jsonData);
console.log('Testing the test.js file')
