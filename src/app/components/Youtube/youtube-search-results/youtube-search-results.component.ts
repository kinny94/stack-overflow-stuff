import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-search-results',
  templateUrl: './youtube-search-results.component.html',
  styleUrls: ['./youtube-search-results.component.css']
})
export class YoutubeSearchResultsComponent implements OnInit {

  @Input() searchResults;
  constructor() { }

  ngOnInit() {
    console.log( this.searchResults );
  }

}
