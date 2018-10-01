import { QuestionService } from './../../services/question.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent implements OnInit {

  question_details$: [];
  isLoading = true;

  constructor( private route: ActivatedRoute, private questionService: QuestionService ) { }

  ngOnInit() {

    this.route.queryParams.pipe(
      map(params => params.question_id ? params.question_id : undefined ),
      switchMap(qID => qID ? this.questionService.getQuestionDetails(qID) : undefined ),
      map((qDetails: any) => {
        if ( qDetails && qDetails.items && qDetails.items.length > 0 ) {
          this.isLoading = false;
          return  qDetails.items;
        }
      }),
      catchError( error => of(error)),
    ).subscribe( data => {
      console.log( data );
      this.question_details$ = data;
    });
  }

}
