import { TestBed } from '@angular/core/testing';

import { JobPostGuard } from './job-post.guard';

describe('JobPostGuard', () => {
  let guard: JobPostGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobPostGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
