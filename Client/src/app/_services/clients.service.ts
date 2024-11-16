import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environments/environment';
import { Client } from '../_models/client';
import { Observable, of, tap } from 'rxjs';
import { CacheService } from './cache.service';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private cacheService: CacheService) { }

  // getClients() {
  //   return this.http.get<Client[]>(this.baseUrl + 'client/all-clients', httpOptions)
  // }

  getClients(){
    const cachedData = this.cacheService.get('clients');
    if (cachedData) {
      return of(cachedData);
    }

    return this.http.get<Client[]>(this.baseUrl + 'client/all-clients', httpOptions).pipe(
      tap((data: any) => {
        this.cacheService.put('clients',data)
      })
    )
  }
}
