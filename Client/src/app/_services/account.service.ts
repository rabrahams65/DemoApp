import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/Environments/environment';
import { ResponseMessage } from '../_models/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'useraccount/login', model ).pipe(
      map((response: User) =>{
        const user = response;
        if(user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'useraccount/register', model).pipe(
      map((response: any) => {
        
        // if(response.errors.length > 0){
        //   return response.errors
        // }
        
        if (response){
          // localStorage.setItem('user', JSON.stringify(user));
          // this.currentUserSource.next(user);
          return response;
        }
      })
    )
  }
  
  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
