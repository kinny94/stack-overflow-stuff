import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })

    , { optional: true }),
    /* 2 */ group([  // block executes in parallel

      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))

      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ routerTransition ],
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
        } else if ( route === 'youtube' ) {
          this.themeClass = 'youtube';
        } else if ( route === 'weather' ) {
          this.themeClass = 'map';
        }
      }
    });
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}

