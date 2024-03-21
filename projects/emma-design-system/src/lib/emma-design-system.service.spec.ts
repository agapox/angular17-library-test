import { TestBed } from '@angular/core/testing';

import { EmmaDesignSystemService } from './emma-design-system.service';

describe('EmmaDesignSystemService', () => {
  let service: EmmaDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmmaDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
