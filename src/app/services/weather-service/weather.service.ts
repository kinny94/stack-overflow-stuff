import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  api_key = '13e13468908840600e6ee16d876dfe2a';

  constructor( private http: HttpClient ) { }

  getWeatherData( city  ) {
    return this.http.get( `${ this.url }${ city }&apiKey=${ this.api_key }` );
  }
}
