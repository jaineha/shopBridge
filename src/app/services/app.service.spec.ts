import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  });

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

});
