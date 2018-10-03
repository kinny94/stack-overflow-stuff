import { SearchService } from './../../../services/search.service';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  animations: [
    trigger('changeState', [
      state('up', style({
        paddingTop: '2%',
      })),
      state('mid', style({
        paddingTop: '30%',
      })),
      transition('mid=>up', [
        animate('500ms')
      ]),
      transition('up=>mid', [
        animate('500ms')
      ]),
    ])
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  state = 'mid';
  isInMid = false;
  searchResults: Observable<{}>;

  constructor(  private searchService: SearchService ) { }

  ngOnInit() {
  }

  onChange( event ) {

    if ( this.state === 'mid' ) {
      this.state = 'up';
      this.isInMid = true;
    }

    if ( event === '' ) {
      this.state = 'mid';
    } else {
      this.getSearchResults( event );
    }

  }

  getSearchResults( searchQuery ) {
    this.searchService.getSearchResults( searchQuery );
    this.searchResults = this.searchService.getSearchResults( searchQuery );
  }

}
