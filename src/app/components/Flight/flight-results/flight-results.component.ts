import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css']
})
export class FlightResultsComponent implements OnInit {

  @Input() searchResults;

  constructor() { }

  ngOnInit() {
  }

}
