import { trigger, style, state, transition, animate } from '@angular/animations';
import { YoutubeSearchService } from './../../../services/youtube-services/youtube-search.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-youtube-search',
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
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  state = 'mid';
  isInMid = false;
  searchResults: Observable<{}>;

  constructor( private youTubeGetVideosService: YoutubeSearchService ) { }

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
    this.youTubeGetVideosService.getYoutTubeVideos( searchQuery );
  }

}
