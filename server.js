// importar
var express = require('express');
var iniciador = require('./servidor/src/iniciador.js');
var prueba = require('./servidor/src/prueba.js');
 
// instanciar
var app = express();
 
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/cliente/index.html');
});

iniciador.init(app);
 
console.log("Servidor Express escoitando en modo %s", app.settings.env);