/**
 * Clase que xestiona a pantalla de inicio de sesión
 * @version 0.1
 * @author Carlos Llegaspi
 */
class Login {
    constructor() {
        this.btnRexistro = document.getElementById('bv-btn-rex');
        this.btnIn = document.getElementById('bv-btn-in');
    };

    /**
     * Metodo para iniciar a clase
     */
    init() {
        this.initTextFields();
        this.initLisntersBtns();
    };

    /**
     * Metodo para poñer en funcionamento os campos de texto da pantalla
     * @see https://material.io/develop/web/components/input-controls/text-field/
     */
    initTextFields() {
        const formField = new mdc.textField.MDCTextField(document.querySelector('#bv-tf-nome-usuario'));
        const formField2 = new mdc.textField.MDCTextField(document.querySelector('#bv-tf-contrasinal'));
    };

    /**
     * Metodo para iniciar os listeners dos botóns da pantalla
     * @listens click No boton do rexitro
     */
    initLisntersBtns() {
        this.btnRexistro.addEventListener('click', () => {
            location.href = '/rexistro';
        });
        this.btnIn.addEventListener('click', () => {
            $.ajax({
                type: 'get',
                url: '/entrar',
                data: {
                    usuario: document.querySelector('#bv-tf-nome-usuario > input').value,
                    contrasinal: document.querySelector('#bv-tf-contrasinal > input').value
                },
                success: () => {
                    location.href = '/index'
                },
                error: (error) => {
                    console.log(error);
                    $('.bv-usuario-invalido').show();
                }        
            })
        });
    };
};