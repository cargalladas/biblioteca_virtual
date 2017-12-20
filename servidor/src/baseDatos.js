const pgp = require('pg-promise')();

var conexion = {
    host: 'localhost',
    port: 5432,
    database: 'Biblioteca',
    user: 'Carlos',
    password: 'CH.1234',
    ssl: false,
    binary: false,
}

const db = pgp(conexion);

module.exports = db;