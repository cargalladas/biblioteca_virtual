/**
 * Clase que define a entidade usuario na base de datos
 * @version 0.1
 * @author Carlos Llegaspi
 * @param {object} usarioBD - O obxecto que se recupera da base de datos
 */
class Usuario {
    constructor(usuarioBD) {
        /**
         * @member {number}
         */
        this.id = parseInt(usuarioBD.id);
        /**
         * @member {string}
         */
        this.nomeUsuario = usuarioBD.nomeusuario;
        /**
         * @member {string}
         */
        this.contrasinal = usuarioBD.contrasinal;
        /**
         * @member {string}
         */
        this.nome = usuarioBD.nome;
        /**
         * @member {string}
         */
        this.apelidos = usuarioBD.apelidos;
        /**
         * @member {Date}
         */
        this.dataNacemento = new Date(usuarioBD.datanacemento);
        /**
         * @member {string}
         */
        this.direccion = usuarioBD.direccion;
        /**
         * @member {string}
         */
        this.dni = usuarioBD.dni;
        /**
         * @member {string}
         */
        this.email = usuarioBD.email;
        /**
         * @member {number}
         */
        this.telefono = parseInt(usuarioBD.telefono);
        /**
         * @member {Date}
         */
        this.dataAlta = new Date(usuarioBD.dataalta);
        /**
         * @member {number}
         */
        this.rol = parseInt(usuarioBD.rol);
        /**
         * @member {string}
         */
        this.urlImagxe = usuarioBD.foto.substr(1);
    };

};