var db = require('../baseDatos.js');

function getTodosUsuarios(fn){
    db.any('select * from esquemabiblioteca.usuarios')
        .then(data => {
            fn(null, data);
        })
        .catch(error => {
            fn(error);
        })
}

module.exports = {
    getTodosUsuarios: getTodosUsuarios
}