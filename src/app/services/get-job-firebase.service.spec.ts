import { TestBed } from '@angular/core/testing';

import { GetJobFirebaseService } from './get-job-firebase.service';

describe('GetJobFirebaseService', () => {
  let service: GetJobFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJobFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
