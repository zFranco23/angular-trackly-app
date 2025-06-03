import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { primeNgProviders } from '../lib/prime-ng';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    ...primeNgProviders,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
