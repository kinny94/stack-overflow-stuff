import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  clientId = environment.github.clientId;
  clentSecret = environment.github.client_secret;

  url = 'https://api.github.com/users';

  constructor( private http: HttpClient ) {}

  getSearchResults = ( searchQuery ) => {
    return this.http.get(`${ this.url }/${ searchQuery }`);
  }
}
