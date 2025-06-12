import { Routes } from '@angular/router';
import { authorizeGuard } from '@core/guards/auth.guard';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { PrivateLayoutComponent } from '@shared/layouts/private/private.component';
import { publicGuard } from '@core/guards/public.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [publicGuard],
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [authorizeGuard],
    component: PrivateLayoutComponent,
    loadChildren: () =>
      import('./modules/private.routes').then((m) => m.privateRoutes),
  },
];
