import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  currentUser$: Observable<User>;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    this.setCurrentUser();
    this.currentUser$ = this.accountService.currentUser$
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  onItemClick(e: any) {
    
    if(e.itemData.text == 'Grid' ) {
      this.router.navigateByUrl('/grid');
      console.log(e.itemIndex + 'clicked')
    }

    if(e.itemData.text == 'Accordion') {
      this.router.navigateByUrl('/accordion');
      console.log(e.itemIndex + 'clicked')
    }

    if(e.itemData.text == 'Log out') {
      this.accountService.logout();
      this.router.navigateByUrl('/');
    }

    
}

}
