import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (!loginService.isLoggedIn) {
    router.navigate(['/login']);
  }
  return true;
};
