import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchResultsComponent } from './github-search-results.component';

describe('GithubSearchResultsComponent', () => {
  let component: GithubSearchResultsComponent;
  let fixture: ComponentFixture<GithubSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
