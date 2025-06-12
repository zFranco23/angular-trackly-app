import { Routes } from '@angular/router';

export const privateRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
