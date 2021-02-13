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
  // brand form
  brandForm = new FormGroup({
    brandName: new FormControl('', [
      Validators.required,
    ]),
    // car name
    carName: new FormControl('', [
      Validators.required,
    ]),
    varientName: new FormControl('', [
      Validators.required,
    ])
  });
  // policy form
  policyForm = new FormGroup({
    purchaseDate: new FormControl('', [
      Validators.required,
    ]),
    previousPolicyDate: new FormControl('', [
      Validators.required,
    ]),
    mobile: new FormControl('', [
      Validators.required,
      CustomValidator.Pattern_Validator(/^[789]\d{9}/, { mobilePattern: true }),
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

/**
 * Subtit function runs every time form is sunmitted
 */

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

/**
 * Used to get value of form control abjects
 * 
 * @param formName 
 * @param controlName 
 */
getControlvalue(formName:string, controlName){
  if(formName == 'regForm'){
    return this.regForm.value.regNo
  }else if(formName == 'brandForm'){
    let value = this.brandForm.controls[controlName].value
    return `${value}`
  }
}
/**
 * calculate price
 */
getPrice(){
let price = Math.floor(1000 + Math.random() * 9000);
return  price;
}
/**
 * display thanks card once every function completed
 */
thanksCard(){
  this.confirmation = false
  this.thanks = true;
}
}
