import { QuestionService } from './../../services/question.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent implements OnInit {

  @Input() question: any;

  question_details$ = [];
  isAnswered = false;
  isLoading = true;

  constructor( private route: ActivatedRoute, private questionService: QuestionService ) { }

  ngOnInit() {

    console.log( this.question.link );

    if ( this.question.is_answered ) {
      this.route.queryParams.pipe(
        map(params => params.question_id ? params.question_id : undefined ),
        switchMap(qID => qID ? this.questionService.getQuestionDetails(qID) : undefined ),
        map((qDetails: any) => {
          if ( qDetails && qDetails.items && qDetails.items.length > 0 ) {
            setTimeout(() => {
              this.isLoading = false;
              this.isAnswered = this.question.is_answered;
            }, 300);
            return  qDetails.items;
          }
        }),
        catchError( error => of(error)),
        ).subscribe( data => {
          this.question_details$ = data;
        });
      } else {
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      }
    }

  }
