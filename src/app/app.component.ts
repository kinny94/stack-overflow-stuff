import { SearchService } from './services/search.service';
import { Component } from '@angular/core';
import { state, trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger('changeState', [
      state('up', style({
        paddingTop: '0%',
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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'stack-overflow';
  search: string;
  state = 'mid';
  isInMid = false;

  constructor( private searchService: SearchService ) {}

  onChange( event ) {

    if ( this.state === 'mid' ) {
      this.state = 'up';
      this.isInMid = true;
    }

    if ( event === '' ) {
      this.state = 'mid';
      this.isInMid = false;
    }
    this.search = event;
    this.getSearchResults( event );
  }

  getSearchResults( searchQuery ) {
    this.searchService.getSearchResults( searchQuery ).subscribe( data => console.log( data ));
  }

}

