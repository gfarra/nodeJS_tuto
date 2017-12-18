var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

// Use session
app.use(session({secret: 'todotopsecret'}))

// If no todolist we create one
.use(function(req, res, next){
  if(typeof(req.session.toDoList) == "undefined" ) {
    req.session.toDoList = [];
  }
  next();
})

// view list
.get('/toDoList', function(req, res){
  res.render('toDoList.ejs', {toDoList: req.session.toDoList})
})


// add item
.post('/toDoList/ajouter/', urlencodedParser, function(req, res){
  if (req.body.newtodo != '') {
         req.session.toDoList.push(req.body.newtodo);
     }
  res.redirect('/toDoList');
})

// delete item
.get('/toDoList/supprimer/:id', function(req, res) {
    if (req.params.id != '') {
        req.session.toDoList.splice(req.params.id, 1);
    }
    res.redirect('/toDoList');
})

.use(function(req, res, next){
    res.redirect('/toDoList');
})

.listen(8080);
