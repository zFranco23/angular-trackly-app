import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginRequest } from '../models/request.model';
import { environment } from '@environments/environment.development';
import { LoginResponse } from '../models/response.model';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);

  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/auth/login`,
      data
    );
  }
}
