import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

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

  constructor(private accountService: AccountService, private router: Router, private fb: FormBuilder){}
  
  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      registerEmailAddress: ['', [Validators.required, Validators.email]],
      registerPassword: ['',[Validators.required, Validators.minLength(6), this.passwordComplexityValidator()]],
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

  passwordComplexityValidator(): ValidatorFn {
    return (control: FormControl) => {
      const password = control.value;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(password);
      return hasUppercase && hasLowercase && hasNumber && hasSpecialChar ? null : { invalidPassword: true };
    };
  }

  register(){

    var newUser = {
      emailAddress : this.registerForm.get('registerEmailAddress').value,
      password: this.registerForm.get('registerPassword').value
    }
    
    console.log(newUser)
    this.accountService.register(newUser).subscribe(response => {
      if(response.succeeded){
        this.cancel();
        this.registerSuccesful.emit(true);
      }
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
