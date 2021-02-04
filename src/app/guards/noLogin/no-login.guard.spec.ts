import { TestBed } from '@angular/core/testing';

import { NoLoginGuard } from './no-login.guard';

describe('NoLoginGuard', () => {
  let guard: NoLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
