var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});

app.get('/compter/:nombre', function(req, res){
  var noms = ["Gabriel", "Lorenz", "Olivia", "Marion"];
  res.render('page.ejs', {compteur: req.params.nombre, noms: noms})
});

app.get('/etage/:etagenum/chambre', function(req, res) {
  var numeroEtage = Number.isInteger(parseInt(req.params.etagenum));
  console.log(numeroEtage);
  if (numeroEtage == true) {
    res.render('chambre.ejs', {etage: req.params.etagenum});
  } else {
      res.setHeader('Content-Type', 'text/plain');
      res.send(404, 'Page introuvable !');
  }
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.listen(8000);
