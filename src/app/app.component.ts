import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor( private router: Router ) {}
  themeClass = '';

  ngOnInit() {
    this.router.events.subscribe(( val ) => {
      if ( val && val['url'] !== undefined ) {
        const route = val['url'].split('/')[1];
        if ( route === 'stack-overflow' || route === '' ) {
          this.themeClass = 'stack-overflow';
        } else if ( route === 'github' ) {
          this.themeClass = 'github';
        }
      }
    });
  }
}

