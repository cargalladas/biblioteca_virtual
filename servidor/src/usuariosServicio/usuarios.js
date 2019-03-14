const usuariosDAO = require('../usuariosDAO/usuariosDAO.js');
const bcrypt = require('bcrypt');
const round = 15;
const pass ='Hola'
const passF = 'Caca'

function generaHash() {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    console.log(hash);
    var prueba = bcrypt.compareSync(pass, hash);
    console.log(prueba);
    var prueba2 = bcrypt.compareSync(passF, hash);
    console.log(prueba2);
}

module.exports = {
    generaHash: generaHash
}