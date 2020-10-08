import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../../services/login/login.service';

import { IsUnloggedGuard } from './is-unlogged.guard';

describe('IsUnloggedGuard', () => {
  let guard: IsUnloggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        LoginService,
      ]
    });
    guard = TestBed.inject(IsUnloggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
