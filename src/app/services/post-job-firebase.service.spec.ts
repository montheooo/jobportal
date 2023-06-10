import { TestBed } from '@angular/core/testing';

import { PostJobFirebaseService } from './post-job-firebase.service';

describe('PostJobFirebaseService', () => {
  let service: PostJobFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostJobFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
