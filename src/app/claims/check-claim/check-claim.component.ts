import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-check-claim',
  templateUrl: './check-claim.component.html',
  styleUrls: ['./check-claim.component.scss']
})
export class CheckClaimComponent implements OnInit {
  checkClaim: string
  thankuPage: boolean =false
  // trackForm
  trackForm = new FormGroup({
    policyNumber: new FormControl('', [
      Validators.required,
    ])
  });

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.checkClaim =this.route.snapshot.queryParams.type
    this.checkClaim = this.checkClaim.replace(/-/g, " ");
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
  
  return this.trackForm.controls[controlName].hasError(errorName);}

  onSubmit(){
    if(this.trackForm.invalid){
      return
    }
    this.thankuPage = true
  }
}
