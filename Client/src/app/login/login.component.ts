import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CustomValidators } from '../_extensions/validators.extension';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{
  registerMode = false;
  registerSuccessful = false;
  showPassword: boolean = false;
  IsSigningIn: boolean = false;
  model: any = {}
  currentUser$: Observable<User>;
  loginForm: FormGroup;
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
      password: ['',[Validators.required, Validators.minLength(6), CustomValidators.passwordComplexityValidator]]
    })
  }

  login(){
    this.IsSigningIn = true;
    this.accountservice.login(this.loginForm.value).subscribe(() => {
      
      this.router.navigateByUrl('/grid');
    }, error => {
      this.IsSigningIn = false;
      this.apiErrorFeedback = error.error.error;
      this.loginForm.markAsUntouched()
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
    this.showPassword = false;
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
