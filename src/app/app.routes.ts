import { Routes } from '@angular/router';
import { authorizeGuard } from '@core/guards/auth.guard';
import { PrivateLayoutComponent } from '@shared/layouts/private/private.component';
import { publicGuard } from '@core/guards/public.guard';

import { RegisterComponent } from '@modules/auth/pages/register/register.component';
import { LoginComponent } from '@modules/auth/pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [publicGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [publicGuard],
    component: RegisterComponent,
  },
  {
    path: '',
    canActivate: [authorizeGuard],
    component: PrivateLayoutComponent,
    loadChildren: () =>
      import('./modules/private.routes').then((m) => m.privateRoutes),
  },
];
