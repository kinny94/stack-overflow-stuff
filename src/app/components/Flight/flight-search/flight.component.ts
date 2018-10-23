import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
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
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  state = 'mid';
  isInMid = false;
  searchResults: {};
  city = '';

  constructor() { }

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
      this.city = event ;
    }

  }

  onClick() {
    this.getSearchResults( this.city );
  }

  getSearchResults( city ) {
  }
}
