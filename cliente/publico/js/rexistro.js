/**
 * Clase que xestiona a pantalla de rexistro de usuarios
 * @version 0.1
 * @author Carlos Llegaspi
 * @access public
 */
export class Rexistro {
    constructor() {
        
    };

    /**
     * Metodo para iniciar a clase
     * @abstract
     */
    init() {
        this.initTextFields();
        //this.initLisntersBtns();
    };

    /**
     * Metodo para poñer en funcionamento os campos de texto da pantalla
     * @abstract
     * @see https://material.io/develop/web/components/input-controls/text-field/
     */
    initTextFields() {
       var input = document.querySelectorAll('.mdc-text-field');
       for(var i = 0; i < input.length; i++) {
           var tf = new mdc.textField.MDCTextField(input[i]);
       }
       $('#bv-tf-data-nacemento').find('input').bootstrapMaterialDatePicker({ format : 'DD/MM/YYYY', lang : 'es', weekStart : 1, time: false});
    };
}