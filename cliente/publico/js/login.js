class Login {

    constructor() {
        this.app;
    };

    init() {
        this.initTextFields();
    };

    initTextFields() {
        const formField = new mdc.textField.MDCTextField(document.querySelector('#bv-tf-nome-usuario'));
        const formField2 = new mdc.textField.MDCTextField(document.querySelector('#bv-tf-contrasinal'));
    }
};