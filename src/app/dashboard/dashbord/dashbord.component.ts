import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../../shared/custom-validator';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  patternMatch //used to check reg no is valid or not
  vechicleReg: boolean = true //used for reg number 
  brand: boolean //used for brand
  policy:boolean //used to enter policydetails
  confirmation: boolean // used to confirmation before payment
  thanks:boolean // used to land thanku page
  today: number = Date.now();
  oneYearLater= new Date(new Date().setFullYear(new Date().getFullYear() + 1))


  constructor() {
   }
  //form control
  regForm = new FormGroup({
    regNo: new FormControl('', [
      Validators.required,
      CustomValidator.Pattern_Validator(/[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/, { hasPattern: true }),
    ])
  });

  brandForm = new FormGroup({
    brandName: new FormControl('', [
      Validators.required,
    ]),
    carName: new FormControl('', [
      Validators.required,
    ]),
    varientName: new FormControl('', [
      Validators.required,
    ])
  });
  policyForm = new FormGroup({
    purchaseDate: new FormControl('', [
      Validators.required,
    ]),
    previousPolicyDate: new FormControl('', [
      Validators.required,
    ]),
    mobile: new FormControl('', [
      Validators.required,
    ])
  });
  ngOnInit(): void {
  }
    /**
 * used to check validation Error 
 * 
 * 
 * @param controlname,errorName|string
 * 
 * retun error| string
 */
public hasError = (controlName: string, errorName: string) =>{
  if(this.vechicleReg)
  return this.regForm.controls[controlName].hasError(errorName);
  else if(this.brand){
    return this.brandForm.controls[controlName].hasError(errorName);
  }
  else if(this.policy){
    return this.policyForm.controls[controlName].hasError(errorName);
  }
}



onSubmit(){
  if(this.vechicleReg){
    if(this.regForm.invalid){
      return
    }
    this.vechicleReg = false
    this.brand = true
  }else if(this.brand){
    if(this.brandForm.invalid){
      return
    }
    this.brand = false
    this.policy =true
  }else if(this.policy){
    if(this.policyForm.invalid){
      return
    }
    this.policy =false;
    this.confirmation = true
  } 
}

validateRegNumber(){
  if(!this.regForm.value){
    return
  }
  this.regForm.value.regNo = this.regForm.value.regNo.toUpperCase();
  let regRegx = new RegExp('');
  let regNum= this.regForm.value.regNo
  this.patternMatch = regRegx.exec(regNum)
  // console.log(this.patternMatch)  
}

getControlvalue(formName:string, controlName){
  if(formName == 'regForm'){
    return this.regForm.value.regNo
  }else if(formName == 'brandForm'){
    let value = this.brandForm.controls[controlName].value
    return `${value}`
  }
}
getPrice(){
return  1000
}

thanksCard(){
  this.confirmation = false
  this.thanks = true;
}
}
