import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environments/environment';
import { Client } from '../_models/client';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<Client[]>(this.baseUrl + 'client/all-clients', httpOptions)
  }
}
