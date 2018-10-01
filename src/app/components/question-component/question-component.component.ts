import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from './../../services/question.service';
import { Component, OnInit } from '@angular/core';
import { map, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponent implements OnInit {

  question_id: string;
  question$: {};
  questionLink: string;
  isAnswered$: Observable<boolean>;
  isLoading = true;

  constructor( private questionService: QuestionService, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.question_id = this.route.snapshot.queryParamMap.get( 'question_id' );
    this.questionService.getQuestion( this.question_id ).pipe(
      map( (question_details: any) => {
        this.isLoading = false;
        return question_details.items[0] ;
      })
    ).subscribe( data => {
      this.question$ = data;
      this.questionLink = data.link;
      console.log( this.questionLink );
    });


  }
}
