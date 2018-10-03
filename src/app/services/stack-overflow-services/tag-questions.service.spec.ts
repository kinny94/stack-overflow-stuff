import { TestBed, inject } from '@angular/core/testing';

import { TagQuestionsService } from './tag-questions.service';

describe('TagQuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagQuestionsService]
    });
  });

  it('should be created', inject([TagQuestionsService], (service: TagQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
