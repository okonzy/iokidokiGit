var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};
var fs = require('fs');

app.get('/', function(req, res){
  // res.sendFile takes an absolute path to a file and
  // sets the mime type based n the file extname
  // --orgiLine res.sendFile(__dirname + '/index.html', function(err) {
  // --orgiLine  if (err) {
  // --orgiLine    res.status(500).send(err);
  // --orgiLine  }
  // --orgiLine })
// --orgiLine });

// --orgiLine app.get('/data', function(req, res) {
// --orgiLine  res.json(jsonData);

fs.readFile('index.html', function(err, buffer) {
var html = buffer.toString();

res.setHeader('Content-Type', 'text/html');
res.send(html);
});
});
	app.get('/data', function(req, res) {
	res.json(jsonData);
});

var port = 3000;
app.listen(port, function(){
  console.log('listening on http://localhost:', port);
});
