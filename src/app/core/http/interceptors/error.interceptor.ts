// src/app/core/interceptors/error.interceptor.ts
import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const router = inject(Router);
  const messagesService = inject(MessageService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocurrió un error inesperado.';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        switch (error.status) {
          case HttpStatusCode.Unauthorized:
            router.navigate(['/login']);
            localStorage.removeItem('token');
            break;

          default:
            errorMessage = `Server error: ${error.status} - ${error.message}`;
            if (error.error && error.error.message) {
              errorMessage = error.error.message;
            } else if (error.message) {
              errorMessage = error.message;
            }

            messagesService.add({
              severity: 'error',
              summary: 'Error',
              detail: errorMessage,
            });

            break;
        }
      }

      return throwError(() => error);
    })
  );
};
