var db = require('../baseDatos.js');

function rexistraUsuario(nomeUsuario, contrasinal, nome, apelidos, dataNacemento, direccion, dni, email, foto, dataAlta, telefono, fn) {
    db.one('insert into biblioteca.usuarios(nomeusuario, contrasinal, nome, apelidos, datanacemento, direccion, dni, email, foto, dataalta, telefono) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning *', [nomeUsuario, contrasinal, nome, apelidos, dataNacemento, direccion, dni, email, foto, dataAlta, telefono])
        .then( data => {
            fn(null, data);
        })
        .catch( err => {
            fn(err);
        });
};

module.exports = {
    rexistraUsuario: rexistraUsuario
}