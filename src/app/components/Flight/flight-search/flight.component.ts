import { map } from 'rxjs/operators';
import { FlightService } from './../../../services/flight-services/flight.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
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
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  state = 'mid';
  isInMid = false;

  searchResults;
  isLoading = false;

  departureCity = '';
  arrivalCity = '';
  departureDate = '';
  returnDate = '';

  disabled = true;
  roundTrip = false;

  inputError = false;
  samePlaceError = false;
  dateError = false;

  constructor( private flightService: FlightService ) { }

  ngOnInit() {
  }

  onDepartureCityChange( event ) {

    if ( event === '' ) {
      this.state = 'mid';
    } else {
      this.departureCity = event ;
    }
  }

  onArrivalCityChange( event ) {

    if ( event === '' ) {
      this.state = 'mid';
    } else {
      this.arrivalCity = event ;
    }
  }

  trip() {
    this.roundTrip = !this.roundTrip;
    this.disabled = !this.disabled;
    this.returnDate = '';
  }

  onClick() {

    if ( !this.roundTrip ) {
      if ( this.departureCity === '' || this.arrivalCity === '' || this.departureDate === '' ) {
        this.inputError = true;
        return;
      } else {
        this.inputError = false;
      }
    }

    if ( this.roundTrip ) {
      if ( this.departureCity === '' || this.arrivalCity === '' || this.departureDate === '' || this.returnDate === '' ) {
        this.inputError = true;
        return;
      } else {
        this.inputError = false;
      }
    }

    if ( !this.inputError && this.arrivalCity !== '' && this.arrivalCity === this.departureCity ) {
      this.samePlaceError = true;
      return;
    } else {
      this.samePlaceError = false;
    }

    if ( this.departureDate < Date.now().toString()  ) {
      this.dateError = true;
      return;
    } else {
      this.dateError = false;
    }

    if ( !this.inputError && this.roundTrip && this.departureDate !== '' && this.departureDate > this.returnDate ) {
      this.dateError = true;
      return;
    } else {
      this.dateError =  false;
    }

    if ( this.state === 'mid' ) {
      this.state = 'up';
      this.isInMid = true;
    }

    const formattedDepartureDate = moment( new Date( this.departureDate )).format('YYYYMMDD');
    const formattedReturnDate = ( this.roundTrip ) ?  moment( new Date( this.returnDate )).format( 'YYYYMMDD' ) : this.returnDate;

    this.getResults( this.departureCity, this.arrivalCity , formattedDepartureDate, formattedReturnDate );
  }

  getResults( departureCity, arrivalCity, departureDate, returnDate ) {

    this.isLoading = true;
    setTimeout(() => {
      this.searchResults = 'something';
      this.isLoading = false;
    }, 2000);

    // this.flightService.getFlightsData( departureCity, arrivalCity, departureDate, returnDate ).pipe(
    //   map( data => data )
    // ).subscribe( flightsData => {
    //   setTimeout;
    //   this.searchResults = flightsData;
    //   this.isLoading = false;
    // });
  }
}
