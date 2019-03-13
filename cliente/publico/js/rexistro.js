/**
 * Clase que xestiona a pantalla de rexistro de usuarios
 * @version 0.1
 * @author Carlos Llegaspi
 */
class Rexistro {
    constructor() {
    
    };

    /**
     * Metodo para iniciar a clase
     */
    init() {
        this.initTextFields();
        this.setListenerBtnImputField();
        this.setListenerBtnRexistrar();
    };

    /**
     * Metodo para poñer en funcionamento os campos de texto da pantalla
     * @see https://material.io/develop/web/components/input-controls/text-field/
     * @listens dateSelected En datePicker
     */
    initTextFields() {
        var tfs = []
        var input = document.querySelectorAll('.mdc-text-field');
        for(var i = 0; i < input.length; i++) {
           var tf = new mdc.textField.MDCTextField(input[i]);
           tfs.push(tf)
        }
        $('#bv-tf-data-nacemento').find('input').bootstrapMaterialDatePicker({ format : 'DD/MM/YYYY', lang : 'es', weekStart : 1, time: false}).on('dateSelected', (e, date) => {
            tfs[6].value = ' ';
        });
    };

    /**
     * Da funcionalidade de input a un botón para poder subir unha imaxe e previsualizala
     * @listens click En botón fotografía
     * @listens click En input file oculto
     */
    setListenerBtnImputField() {
        let btn = document.getElementById('bv-btn-input-file');
        let inputField = document.getElementsByClassName('bv-input-file')[0]
        btn.addEventListener('click', e => {
            inputField.click();   
        });
        inputField.addEventListener('change', e => {
            if (inputField.files && inputField.files[0]) {
                var reader = new FileReader();
            
                reader.onload = function(e) {
                    let divPrev = document.getElementById('bv-previsualizacion');
                    $(divPrev).empty();
                    let img = document.createElement('img')
                    img.src = e.target.result;
                    divPrev.appendChild(img)
                }
            
                reader.readAsDataURL(inputField.files[0]);
              }
        })

    };

    /**
     * Establece a funcionalidade do botón rexitro e fai que se comprobe o formulario antes de tempo
     * @listens click No botón rexistro
     */
    setListenerBtnRexistrar() {
        let btn = document.getElementById('bv-btn-in');
        btn.addEventListener('click', e => {
            this.comprobaFormulario();
        });
    };

    /**
     * Comproba os campos do formulario
     */
    comprobaFormulario() {
        let inputNomeUsuario = document.querySelector('#bv-tf-nome-usuario > input');
        if ( !inputNomeUsuario.value || /\s/.test(inputNomeUsuario.value) ) {
            alert('O nome de usuario non pode ter espazos');
            return;
        }

        let inputContrasinal = document.querySelector('#bv-tf-contrasinal > input');
        if( !inputContrasinal.value || /\s/.test(inputContrasinal.value) ) {
            alert('O contrasinal non pode ter espazos');
            return;
        }

        let inputContrasinal2 = document.querySelector('#bv-tf-contrasinal-rep > input');
        if(inputContrasinal.value != inputContrasinal2.value) {
            alert('Os contrasinais non coinciden');
            return;
        }

        let inputNome = document.querySelector('#bv-tf-nome > input');
        if( !inputNome.value || /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(inputNome.value) ) {
            alert('O nome introducido non é válido');
            return;
        }

        let inputApelidos = document.querySelector('#bv-tf-apelidos > input');
        if( !inputApelidos.value || /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(inputApelidos.value) ) {
            alert('Os apelidos introducidos non son válidos');
            return;
        }

        let inputDni = document.querySelector('#bv-tf-dni > input');
        if( inputDni.value && /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(inputDni.value)) {
            alert('O DNI introducido non é válido');
            return;
        }

        let inputCorreo = document.querySelector('#bv-tf-email > input');
        if( inputCorreo.value && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(inputCorreo.value)) {
            alert('O e-mail introducido non é válido');
            return;
        }
        
        let inputTlf = document.querySelector('#bv-tf-telefono > input');
        if( inputTlf.value && /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/.test(inputTlf.value) ) {
            alert('O teléfono introducido non é válido');
            return;
        }


    }
};