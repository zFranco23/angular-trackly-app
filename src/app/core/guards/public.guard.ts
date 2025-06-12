import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { inject } from '@angular/core';

export const publicGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    router.navigate(['/']);
  }

  return true;
};
