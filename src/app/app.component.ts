import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'stack-overflow';
    search: string;

  constructor() {
    console.log( this.search );
  }

  onChange( event ) {
    this.search = event;
    console.log( this.search ) 
  }
}

