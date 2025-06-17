import { Injectable, inject, signal } from '@angular/core';
import { User } from '@modules/auth/models/user.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  user = signal<User | null>(null);

  authService = inject(AuthService);

  getUserProfile() {
    this.authService.getProfile().subscribe((res) => {
      this.user.set(res);
    });
  }
}
