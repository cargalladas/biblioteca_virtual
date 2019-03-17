// importar
var express = require('express');
var session = require('express-session');
var iniciador = require('./servidor/src/iniciador.js');
var path = require('path')
var multer = require('multer');
var upload = multer({dest: './tmp'})

var app = express();

//Servizo para usuarios
const xestorUsuarios = require('./servidor/src/usuariosServicio/usuarios.js');

// Guardar sesión
app.use( session( {
  secret: 'Esta ben oh',
  cookie: {
    path: '/', 
    httpOnly: true,
    secure: false,
    maxAge: 24*60*60*1000
   }
}));

let restrinxido = (req, res, next) => {
  if(req.session.usuario && (req.session.usuario.rol == 0 || req.session.usuario.rol == 1)) {
    return next();
  } else {
    return res.render('404.html');
  }
}

let restrinxidoAdministrador = (req, res, next) => {
  if(req.session.usuario && (req.session.usuario.rol == 0)) {
    return next();
  } else {
    return res.render('404.html');
  }
}

// Vistas da aplicación
var vistas = [__dirname + '/cliente/publico/html', __dirname + '/cliente/privado/html', __dirname + '/cliente/usuario/html']
app.set('views', vistas);

app.use('/cliente/privado/*', restrinxidoAdministrador)

app.use('/cliente/usuario/*', restrinxido)

app.all('/cliente/privado/*', restrinxidoAdministrador)

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
});

app.get('/index', restrinxido, (req, res) => {
  res.render('index.html');
});

app.get('/entrar', xestorUsuarios.comprobaUsuario)

app.post('/rexistraUsuario', upload.single('foto'), xestorUsuarios.rexitraUsuario);

iniciador.init(app);