/// <reference path="../typings/tsd.d.ts" />
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.render('index', {name: 'Rob Evola', job: 'Programmer'});
});