import { FormGroup } from "@angular/forms";
import { allEntities } from "../entities/all-entities.model";

export interface GenericFormGroup {
    // the form will represent the object to update EX : User
    form? : FormGroup; 
    // formRules will be an array which serve to build the html form corresponding to the updating object
    formRules? : FormRules[];
    // title og the pop up 
    modalTitle : string
}

export interface FormRules {
    typeForm : string; // = 'select' | 'input' | 'dropdown' 
    typeInput? : string; // define the input type if typeForm = input
    placeholder : string; // placeholder og the input
    formControl : string; // must match with form control name key declared in the form group
    label : string; // label of the input
    // if typeForm = 'select' | 'dropdown' we need to pass options.
    // can correspond to hardcoded string or a list of DB entities
    option? : string[] | allEntities[];
    // if option correspond to an entity, we need to precise the key used for display the option
    // EX : here options are roles in DB
    // so we set keyOption = 'name'
    // in the select | dropdown the name will be displayed 
        // option: [
        //     { id: 1, name: 'Admin' },
        //     { id: 2, name: 'Employé' },
        //   ],
        // keyOption : 'name',
    keyOption? : string; 
    errorText? : string;

}