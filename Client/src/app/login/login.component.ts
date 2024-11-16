import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  registerMode = false;
  registerSuccessful = false;
  model: any = {}
  currentUser$: Observable<User>;
  loginForm: FormGroup;
  showPassword: boolean = false;
  passwordType: string;
  apiErrorFeedback: string;

  constructor(private accountservice : AccountService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
   this.currentUser$ = this.accountservice.currentUser$;
   this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6), this.passwordComplexityValidator()]]
    })
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

  login(){
    this.accountservice.login(this.loginForm.value).subscribe(response => {
      this.router.navigateByUrl('/grid');
    }, error => {
      console.log(error.error.error);
      this.apiErrorFeedback = error.error.error;
    })
  }

  logOut(){
    this.accountservice.logout();
    this.router.navigateByUrl('/');
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
    this.resetLoginForm();
  }

  resetLoginForm(){
    this.loginForm.reset();
    this.togglePasswordType()
  }

  togglePasswordType() {
    this.showPassword = !this.showPassword;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  checkRegisterStatus(event: boolean) {
    this.registerSuccessful = event;
  }


}
