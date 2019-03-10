/**
 * Clase que xestiona a pantalla de inicio de sesión
 * @version 0.1
 * @author Carlos Llegaspi
 * @access public
 */
export class Login {
    constructor() {
        /**
         * @type {object}
         */
        this.btnRexistro = document.getElementById('bv-btn-rex');
        /**
         * @type {object}
         */
        this.btnIn = document.getElementById('bv-btn-in');
    };

    /**
     * Metodo para iniciar a clase
     * @abstract
     */
    init() {
        this.initTextFields();
        this.initLisntersBtns();
    };

    /**
     * Metodo para poñer en funcionamento os campos de texto da pantalla
     * @abstract
     * @see https://material.io/develop/web/components/input-controls/text-field/
     */
    initTextFields() {
        const formField = new mdc.textField.MDCTextField(document.querySelector('#bv-tf-nome-usuario'));
        const formField2 = new mdc.textField.MDCTextField(document.querySelector('#bv-tf-contrasinal'));
    };

    /**
     * Metodo para iniciar os listeners dos botóns da pantalla
     * @abstract
     * @listens {click} No boton do rexitro
     */
    initLisntersBtns() {
        this.btnRexistro.addEventListener('click', () => {
            location.href = '/rexistro';
        });
    };
};