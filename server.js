// importar
var express = require('express');
var iniciador = require('./servidor/src/iniciador.js');
var path = require('path')

var app = express();

// Vistas da aplicación
app.set('views', __dirname + '/cliente/publico/html');

app.use(express.static(path.join(__dirname)));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// ruteo
app.get('/', function(req, res){
  res.render('login.html');
});

app.get('/login', function(req, res){
  res.render('login.html')
});

iniciador.init(app);