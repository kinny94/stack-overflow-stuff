import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-search-results',
  templateUrl: './github-search-results.component.html',
  styleUrls: ['./github-search-results.component.css']
})
export class GithubSearchResultsComponent implements OnInit {

  @Input() searchResults;
  isPristine = true;

  constructor() { }

  ngOnInit() {
    if ( this.searchResults ) { this.isPristine = false; }
  }

}
