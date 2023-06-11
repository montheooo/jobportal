import { TestBed } from '@angular/core/testing';

import { JobDetailsGuard } from './job-details.guard';

describe('JobDetailsGuard', () => {
  let guard: JobDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
