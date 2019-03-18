/**
 * Clase que xestiona a pantalla de administración
 * @version 0.1
 * @author Carlos Llegaspi
 * @param {Usuario} usuario -  O usuario que entra na administración
 */
class Administracion {
    constructor(usuario) {
        /**
         * @member {Usuario}
         */
        this.usuario = usuario;
    };

    /**
     * Método que inicia a pantalla de administración
     * @returns {Administracion} 
     */
    init() {
        this.setInfo();
        this.setDrawer();
        this.setListenerLista();
        return this
    };

    /**
     * Método que inicia o drawer
     * @see https://material-components.github.io/material-components-web-catalog/#/component/drawer
     */
    setDrawer() {
        let drawer = mdc.drawer.MDCDrawer.attachTo(document.getElementsByClassName('mdc-drawer')[0]);
    };

    /**
     * Método que mostra a información de usuario no titulo
     */
    setInfo() {
        let titulo = document.getElementById('bv-nome');
        titulo.innerText = this.usuario.nome + ' ' + this.usuario.apelidos;
        let subtitulo = document.getElementById('bv-nome-usuario');
        subtitulo.innerText = this.usuario.nomeUsuario;
    };

    /**
     * Método que inicializa os listeners para cambiar de pantalla
     * @listens click No botón de libros
     * @listens click No botón de autores
     * @listens click No botón de editoriais
     * @listens click No botón de xéneros
     * @listens click No botón de idiomas
     * @listens click No botón de usuarios
     */
    setListenerLista() {
        let btnLibros = document.getElementById('bv-btn-libros');
        btnLibros.addEventListener('click', () => {
            $(".bv-contenedor-categoria").removeClass('bv-contenedor-activo');
            $("#bv-libros").addClass('bv-contenedor-activo');
        });

        let btnAutores = document.getElementById('bv-btn-autores');
        btnAutores.addEventListener('click', () => {
            $(".bv-contenedor-categoria").removeClass('bv-contenedor-activo');
            $("#bv-autores").addClass('bv-contenedor-activo');
        });

        let btnEditoriais = document.getElementById('bv-btn-editoriais');
        btnEditoriais.addEventListener('click', () => {
            $(".bv-contenedor-categoria").removeClass('bv-contenedor-activo');
            $("#bv-editoriais").addClass('bv-contenedor-activo');
        });

        let btnXeneros = document.getElementById('bv-btn-xeneros');
        btnXeneros.addEventListener('click', () => {
            $(".bv-contenedor-categoria").removeClass('bv-contenedor-activo');
            $("#bv-xeneros").addClass('bv-contenedor-activo');
        });

        let btnIdiomas = document.getElementById('bv-btn-idiomas');
        btnIdiomas.addEventListener('click', () => {
            $(".bv-contenedor-categoria").removeClass('bv-contenedor-activo');
            $("#bv-idiomas").addClass('bv-contenedor-activo');
        });

        let btnUsuarios = document.getElementById('bv-btn-usuarios');
        btnUsuarios.addEventListener('click', () => {
            $(".bv-contenedor-categoria").removeClass('bv-contenedor-activo');
            $("#bv-usuarios").addClass('bv-contenedor-activo');
        });
    };
};