var baseDatos = require('./baseDatos.js')

function init(app){
    var port = 8080;
    for(var i in process.argv){
        if(process.argv[i] == '--port' && parseInt(process.argv[parseInt(i) + 1])){
            port = parseInt(process.argv[parseInt(i) + 1]);
        }
    }
    app.listen(port);
    console.log("Servidor escoitando no porto %s", port);

}

module.exports = {
    init: init
}
