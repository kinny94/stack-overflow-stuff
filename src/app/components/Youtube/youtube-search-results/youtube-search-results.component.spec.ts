import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSearchResultsComponent } from './youtube-search-results.component';

describe('YoutubeSearchResultsComponent', () => {
  let component: YoutubeSearchResultsComponent;
  let fixture: ComponentFixture<YoutubeSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
