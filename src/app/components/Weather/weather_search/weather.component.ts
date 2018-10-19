import { map } from 'rxjs/operators';
import { WeatherService } from './../../../services/weather-service/weather.service';
import { WeatherService } from '../../../services/weather-service/weather.service';
import { Observable, Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
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
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  state = 'mid';
  isInMid = false;
  searchResults: {};
  city = '';
  weatherSubscription: Subscription;

  constructor( private weatherService: WeatherService ) { }

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
    this.weatherSubscription = this.weatherService.getWeatherData( city ).pipe(
      map( data => data )
    ).subscribe( data => this.searchResults = data );
  }

  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
  }
}
