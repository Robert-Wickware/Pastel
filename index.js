/// <reference path="typings/tsd.d.ts" />
 
var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'me2');

  
app.get('/', function (req, res) {
  res.render('index', {name: 'Rob Evola', job: 'Programmer'});
});
 
 
var port = Number(process.env.PORT || 9292);
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('Example app listening at http://%s:%s', host, port);
});