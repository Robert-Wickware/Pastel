/// <reference path="typings/tsd.d.ts" />
 
var express = require('express');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://wickware-admin:R2-pakouhite@ds051831.mongolab.com:51831/heroku_mlcfqv1f');
if(mongoose.connection != null) {
  console.log("Connected to database!");
}


var routes = require(path.join(__dirname, 'routes/index'));
var app = express();

//Set location of the views as well as which Rendering Engine to use
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'me2');

app.use('/', routes);
 
//Use the appropriate port if running on Heroku or Locally
var port = Number(process.env.PORT || 9292);
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;