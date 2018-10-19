import { TestBed, inject } from '@angular/core/testing';

describe('WeatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherServiceService]
    });
  });

  it('should be created', inject([WeatherServiceService], (service: WeatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
