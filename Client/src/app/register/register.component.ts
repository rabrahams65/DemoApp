import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CustomValidators } from '../_extensions/validators.extension';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  @Output() registerSuccesful = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  IsRegistering: boolean = false;
  passwordType: string;
  apiErrorFeedback: string[];

  constructor(private accountService: AccountService, private router: Router, private fb: FormBuilder){}
  
  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      registerEmailAddress: ['', [Validators.required, Validators.email]],
      registerPassword: ['',[Validators.required, Validators.minLength(6), CustomValidators.passwordComplexityValidator]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), this.matchValues('registerPassword')]]
    })
    this.registerForm.controls.registerPassword.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value == control?.parent?.controls[matchTo].value ? null : {isMatching: true}
    }
  }

  register(){
    this.IsRegistering = true;
    var newUser = {
      emailAddress : this.registerForm.get('registerEmailAddress').value,
      password: this.registerForm.get('registerPassword').value
    }
    
    this.accountService.register(newUser).subscribe(response => {
      if(response.succeeded){
        this.cancel();
        this.registerSuccesful.emit(true);
      }
    }, error => {
      this.IsRegistering = false;
      this.apiErrorFeedback = error?.error?.errors;
      this.registerForm.markAsUntouched()
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  togglePasswordType(type: string) {
    if(type =='registerPassword')this.showPassword = !this.showPassword;
    if(type =='confirmPassword')this.showConfirmPassword = !this.showConfirmPassword;
  }
}
