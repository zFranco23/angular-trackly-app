import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { routes } from './app.routes';
import { errorInterceptor } from '@core/http/interceptors/error.interceptor';
import { MessageService } from 'primeng/api';
import { primeNgProviders } from 'src/lib/prime-ng';
import { tokenInterceptor } from '@core/http/interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    ...primeNgProviders,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([tokenInterceptor, errorInterceptor])
    ),
    MessageService,
  ],
};
