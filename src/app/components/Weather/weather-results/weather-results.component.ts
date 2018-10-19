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
    if ( changes.searchResults.currentValue.weather[0].main === 'Fog' ) {
      this.imageSrc = './assets/images/rain.png';
    } else {
      this.imageSrc = './assets/images/sunny.jpg';
    }
  }

  ngOnInit() {}

}
