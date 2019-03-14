// importar
var express = require('express');
var iniciador = require('./servidor/src/iniciador.js');
var path = require('path')
var multer = require('multer');
var upload = multer({dest: './tmp'})

var app = express();

//Servizo para usuarios
const xestorUsuarios = require('./servidor/src/usuariosServicio/usuarios.js');

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
  res.render('login.html');
});

app.get('/rexistro', function(req, res){
  res.render('rexistro.html');
})

app.post('/rexistraUsuario', upload.single('foto'), xestorUsuarios.rexitraUsuario);

iniciador.init(app);