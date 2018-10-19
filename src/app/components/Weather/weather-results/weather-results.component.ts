import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css']
})
export class WeatherResultsComponent implements OnInit {

  @Input() searchResults;
  constructor() { }

  imageSrc = './assets/images/rain.png';

  ngOnInit() {
    console.log( this.searchResults );
  }

}
