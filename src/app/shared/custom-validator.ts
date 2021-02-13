/**
 * created by: ujjwal
 * modified by: ujjwal
 * purpose: to define custom validation
 * created on: 13th feb, 2020
 * 
 */

import { ValidationErrors, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
    static Pattern_Validator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        }
    }

    static Matching_Password(Password:string, error: ValidationErrors): ValidatorFn{
        return (control: AbstractControl): { [key: string]: any } => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            const Valid = Password.match(control.value);
            return Valid ? null : error;
    }
}
}
