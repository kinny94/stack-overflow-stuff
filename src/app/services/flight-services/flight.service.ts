import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url = 'http://developer.goibibo.com/api/search/?';
  api_key = '6da87a6e237c0414b2baaccfa37486ac';
  app_id = '99a7403a';

  constructor( private http: HttpClient ) { }

  getFlightsData( source, destination, departureDate, returnDate  ) {

    if ( !returnDate ) {
      return this.http.get(
        `${this.url}app_id=${this.app_id}&app_key=${this.api_key}&format=json&source=${ source }
        &destination=${ destination }&dateofdeparture=${ departureDate }&seatingclass=E&adults=1&children=0&infants=0&counter=0`
      );
    }

    return this.http.get(
      `${this.url}app_id=${this.app_id}&app_key=${this.api_key}&format=json&source=${ source }
      &destination=${ destination }&dateofdeparture=${ departureDate }&dateofarrival=${ returnDate }
      &seatingclass=E&adults=1&children=0&infants=0&counter=0`
    );
  }
}
