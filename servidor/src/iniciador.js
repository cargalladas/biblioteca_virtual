var baseDatos = require('./baseDatos.js')

function init(app){
    app.listen(80);
    console.log("Servidor escoitando en modo %s", app.settings.env);

}

module.exports = {
    init: init
}
