import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  url = `https://api.stackexchange.com/2.2/questions`;
  key = 'U4DMV*8nvpm3EOpvf69Rxw((';

  constructor( private http: HttpClient ) {}

  getQuestionDetails = ( question_id ) => {
    return this.http.get( `${ this.url }/${ question_id }/answers?key=${ this.key }&order=desc&sort=activity&site=stackoverflow`);
  }

  getQuestion = ( question_id ) => {
    return this.http.get( `${ this.url }/${ question_id }?key=${ this.key }&order=desc&sort=activity&site=stackoverflow`);
  }
}
