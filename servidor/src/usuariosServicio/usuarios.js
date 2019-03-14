const usuariosDAO = require('../usuariosDAO/usuariosDAO.js');
const bcrypt = require('bcrypt');
const fs = require('fs');

function generaHash() {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    console.log(hash);
    var prueba = bcrypt.compareSync(pass, hash);
    console.log(prueba);
    var prueba2 = bcrypt.compareSync(passF, hash);
    console.log(prueba2);
}

function rexitraUsuario(req, res) {
    var nomeUsuario = req.body.nomeUsuario;
    var contrasinal = req.body.contrasinal;
    var nome = req.body.nome;
    var apelidos = req.body.apelidos;
    var direccion = req.body.direccion ? req.body.direccion : null;
    var dataNacemento = req.body.dataNacemento ? new Date(req.body.dataNacemento.split('/')[2], req.body.dataNacemento.split('/')[1], req.body.dataNacemento.split('/')[0]) : null;
    var dni = req.body.dni ? req.body.dni : null;
    var email = req.body.email ? req.body.email : null;
    var telefono = req.body.telefono ? req.body.telefono: null;
    var file = req.file;
    var ahora = new Date(Date.now());
    var ruta = './recursos/imaxes-usuario/' + nomeUsuario + '.' + file.mimetype.split('/')[1];
    if(file) {
        fs.renameSync(file.path, ruta)
    }
    var salt = bcrypt.genSaltSync(15);
    var hash = bcrypt.hashSync(contrasinal, salt);
    usuariosDAO.rexistraUsuario(nomeUsuario, hash, nome, apelidos, dataNacemento, direccion, dni, email, file? ruta: null, ahora, telefono, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500)
                .json({
                    status: 'error',
                    message: 'Non se puido rexistrar o usuario'
                });
        } else {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Rexistrouse o usuario'
                });
        }
    });
};

module.exports = {
    rexitraUsuario: rexitraUsuario
}