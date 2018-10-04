import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GithubUserReposService {

  url = 'https://api.github.com/users';
  clientId = environment.github.clientId;
  client_secret = environment.github.client_secret;

  constructor( private http: HttpClient ) { }

  getUserRepos( username: string ) {
    return this.http.get(`${ this.url }/${ username }/repos?per_page=100`);
  }
}
