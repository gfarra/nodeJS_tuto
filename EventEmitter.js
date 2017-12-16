var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('Game_Over', function(message) {
  console.log(message);
});

jeu.emit('Game_Over', 'Vous avez perdu  !');
