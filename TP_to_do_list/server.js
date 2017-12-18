var session = require('cookie-session'); // Charge le middleware de sessions
var express = require('express');
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var List = [];
var nbItem = List.length;
var app = express();

app.use(session({secret: 'todotopsecret'}))


app.get('/toDoList', function(req, res){
  res.render('toDoList.ejs', {List: List})
});

app.post('/toDoList/ajouter', function(req, res){
  res.render('toDoList.ejs', {List: List})
});

app.post('/toDoList/:id', function(req, res){
  res.render('toDoList.ejs', {List: List})
});
