import { map } from 'rxjs/operators';
import { TagQuestionsService } from './../../../services/tag-questions.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-questions',
  templateUrl: './tag-questions.component.html',
  styleUrls: ['./tag-questions.component.css']
})
export class TagQuestionsComponent implements OnInit {

  tag: string;
  tagQuestionsData: any;
  isLoading = true;

  constructor( private route: ActivatedRoute, private tagQuestionsService: TagQuestionsService ) { }

  ngOnInit() {
    this.tag = this.route.snapshot.queryParamMap.get( 'tag' );
    this.tagQuestionsData = this.tagQuestionsService.getQuestionsWithTag( this.tag );
  }

}
