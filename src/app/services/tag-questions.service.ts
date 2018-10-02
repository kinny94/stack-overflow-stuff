import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagQuestionsService {

  url = `https://api.stackexchange.com/2.2/tags`;
  key = 'U4DMV*8nvpm3EOpvf69Rxw((';


  constructor( private http: HttpClient ) { }

  getQuestionsWithTag = ( tag ) => {
    return this.http.get( `${ this.url }/${ tag }/faq?key=${ this.key }&site=stackoverflow` );
  }

}
