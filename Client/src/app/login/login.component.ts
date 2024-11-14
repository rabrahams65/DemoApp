import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  registerMode = false;
  model: any = {}
  currentUser$: Observable<User>;

  constructor(private accountservice : AccountService, private router: Router) {}

  ngOnInit(): void {
   this.currentUser$ = this.accountservice.currentUser$
  }

  login(){
    this.accountservice.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/grid');
    }, error => {
      console.log(error);
    })
  }

  logOut(){
    this.accountservice.logout();
    this.router.navigateByUrl('/');
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
    console.log("register mode = " + this.registerMode)
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
