import { TestBed, inject } from '@angular/core/testing';

import { GithubSelectedUserService } from './github-selected-user.service';

describe('GithubSelectedUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubSelectedUserService]
    });
  });

  it('should be created', inject([GithubSelectedUserService], (service: GithubSelectedUserService) => {
    expect(service).toBeTruthy();
  }));
});
