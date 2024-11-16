import { ValidatorFn, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

export class CustomValidators extends Validators {
  static passwordComplexityValidator: ValidatorFn = (control: FormControl) => {
    const password = control.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(password);
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar ? null : { invalidPassword: true };
  };
}
