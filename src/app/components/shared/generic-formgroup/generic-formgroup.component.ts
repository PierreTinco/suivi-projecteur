import { Component, Input, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { GenericFormGroup } from 'src/app/models/generic-components/genericFormGroup.model';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-generic-formgroup',
  templateUrl: './generic-formgroup.component.html',
  styleUrls: ['./generic-formgroup.component.scss']
})
export class GenericFormgroupComponent   
extends SimpleModalComponent<any, any> 
implements OnInit {
  submitted = false
  @Input() data : GenericFormGroup

  constructor(private alert : AlertService) {
    super()
   }

  ngOnInit(): void {
  }

  addValueToSelect(idSelected : any,formControl : string,options,idReset : string,isSelectionOnId : boolean){
     
      let optionToPush
      let testIfOptionIsFindOnActualArray
      if(isSelectionOnId){
        optionToPush = options.find((el)=>el.id == idSelected)
        testIfOptionIsFindOnActualArray = this.data.form.get(formControl).value.find(el =>el.id == optionToPush.id) === undefined
      }else{
        optionToPush = options.find((el)=>el == idSelected)
        testIfOptionIsFindOnActualArray = this.data.form.get(formControl).value.find(el =>el == optionToPush) === undefined
      }

      if(testIfOptionIsFindOnActualArray){
        this.data.form.get(formControl).value.push(optionToPush)
        document.getElementById(idReset)['value'] = ''
      }else{
        this.alert.warn("Vous avez déjà séléctionné cette option")
        document.getElementById(idReset)['value'] = ''
      }
  }

  removeValueFromSelect(itemSelected,formControl : string,isSelectionOnId : boolean){
    let indexToSplice
    if(isSelectionOnId){
      indexToSplice = this.data.form.get(formControl).value.findIndex(el => el.id == itemSelected.id)
    }else {
      indexToSplice = this.data.form.get(formControl).value.findIndex(el => el == itemSelected)
    }

    this.data.form.get(formControl).value.splice(indexToSplice,indexToSplice+1)
  }

  confirm() {
    this.result = JSON.parse(JSON.stringify(this.data.form.value))
    this.close();
  }
  
  onSubmitForm(){
    this.submitted = true
      if(this.checkFromValidity()){
        this.confirm()
      }
  }
  // idk why but we're forced to do this check for formControl arrays, this may be optimized
  checkFromValidity(){
    if(this.data.form.valid){
      return true
    }else{
      const invalidFromControls = this.findInvalidControls()

      if(invalidFromControls.every(el=>Array.isArray(this.data.form.get(el).value))) {
        const invalidFromControlsCopy = [...invalidFromControls]

        invalidFromControls.forEach((formControl : string)=> {

          if(this.data.form.get(formControl).value?.length > 0){
            const indexToRemove = invalidFromControlsCopy.findIndex(el => el == formControl)
            invalidFromControlsCopy.splice(indexToRemove,1)
          }
        })
        return !(invalidFromControlsCopy.length > 0)
      }else{
        return false
      }
    }
  }

  findInvalidControls(){
    const invalid = [];
    const controls = this.data.form.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}
}
