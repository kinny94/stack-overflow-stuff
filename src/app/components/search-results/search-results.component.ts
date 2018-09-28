import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {

  @Input() searchResults;

  constructor( private searchService: SearchService ) {}

  ngOnInit() {}

}
