// importar
var express = require('express');
 
// instanciar
var app = express();
 
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

// escuchar
app.listen(80);
 
console.log("Servidor Express escuchando en modo %s", app.settings.env);