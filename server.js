// importar
var express = require('express');
var iniciador = require('./servidor/src/iniciador.js');
var dao = require('./servidor/src/usuariosDAO/usuariosDAO.js');
 
// instanciar
var app = express();
 
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/cliente/index.html');
});

iniciador.init(app);