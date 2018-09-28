import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = `https://api.stackexchange.com/2.2/search`;
  key = 'U4DMV*8nvpm3EOpvf69Rxw((';

  constructor( private http: HttpClient ) {}

  getSearchResults = ( searchQuery ) => {
    return this.http.get( `${ this.url }?key=${ this.key }&site=stackoverflow&intitle=${ searchQuery }`);
  }
}
