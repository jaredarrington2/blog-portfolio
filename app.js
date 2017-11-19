var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended : false}))

app.get('/' , (req, res) => {
  res.sendFile(__dirname + '/views/html/portfolio.html');
});

app.get('/post-article' , (req, res) => {
  res.sendFile(__dirname + '/views/html/index.html');
});

app.post('/post-article' , (req, res) => {
  res.sendFile(__dirname + '/views/html/index.html');
  console.dir(req.body);
});

app.listen(3000);
