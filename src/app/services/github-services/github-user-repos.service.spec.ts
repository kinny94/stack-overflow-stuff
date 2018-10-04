import { TestBed, inject } from '@angular/core/testing';

import { GithubUserReposService } from './github-user-repos.service';

describe('GithubUserReposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubUserReposService]
    });
  });

  it('should be created', inject([GithubUserReposService], (service: GithubUserReposService) => {
    expect(service).toBeTruthy();
  }));
});
