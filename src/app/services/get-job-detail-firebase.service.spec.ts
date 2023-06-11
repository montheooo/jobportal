import { TestBed } from '@angular/core/testing';

import { GetJobDetailFirebaseService } from './get-job-detail-firebase.service';

describe('GetJobDetailFirebaseService', () => {
  let service: GetJobDetailFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetJobDetailFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
