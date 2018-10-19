import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css']
})
export class WeatherResultsComponent implements OnInit, OnChanges {

  @Input() searchResults;
  constructor() { }

  imageSrc = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log( changes.searchResults.currentValue );
    if ( changes.searchResults.currentValue.weather[0].main === 'Fog'  ||
      changes.searchResults.currentValue.weather[0].main === 'Drizzle' ) {
      this.imageSrc = './assets/images/rain.png';
    } else {
      this.imageSrc = './assets/images/sunny.jpg';
    }
  }

  ngOnInit() {}

}
