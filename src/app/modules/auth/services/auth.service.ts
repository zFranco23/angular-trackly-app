import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginRequest, RegisterRequest } from '../models/http/request.model';
import { environment } from '@environments/environment.development';
import { LoginResponse } from '../models/http/response.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  login(data: LoginRequest) {
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/auth/login`,
      data
    );
  }

  registerUser(data: RegisterRequest) {
    return this.http.post<User>(`${environment.apiUrl}/auth/register`, data);
  }

  getProfile() {
    return this.http.get<User>(`${environment.apiUrl}/users`);
  }
}
