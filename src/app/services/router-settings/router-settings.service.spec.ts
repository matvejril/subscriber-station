import { TestBed } from '@angular/core/testing';

import { RouterSettingsService } from './router-settings.service';

describe('RouterSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterSettingsService = TestBed.get(RouterSettingsService);
    expect(service).toBeTruthy();
  });
});
