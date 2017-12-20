var baseDatos = require('./baseDatos.js')

function init(app){
    app.listen(80);
}

module.exports = {
    init: init
}