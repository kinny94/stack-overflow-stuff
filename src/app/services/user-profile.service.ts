import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  url = `https://api.stackexchange.com/2.2/users`;
  key = 'U4DMV*8nvpm3EOpvf69Rxw((';

  constructor( private http: HttpClient ) { }

  getUserProfile = ( user_id ) => {
    return this.http.get( `${ this.url }/${ user_id }?key=${ this.key }&order=desc&sort=reputation&site=stackoverflow`);
  }
}
