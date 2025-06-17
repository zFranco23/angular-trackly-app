import { Component, inject, signal } from '@angular/core';
import { AppInput } from '../../../../shared/components/forms/input/input.component';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '@shared/services/form.service';
import { WithErrorComponent } from '@shared/components/forms/with-error/with-error.component';
import { WithLabelComponent } from '@shared/components/forms/with-label/with-label.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '@modules/auth/models/http/request.model';
// import { handleLoadingIndicator } from '@shared/operators/handle-loading-indicator.operator';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';
// import { UserStore } from '../../stores/user.store';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  imports: [
    ButtonModule,
    FloatLabelModule,
    PasswordModule,
    AppInput,
    ReactiveFormsModule,
    WithErrorComponent,
    WithLabelComponent,
  ],
  providers: [FormService, AuthService],
})
export class LoginForm {
  isLoading = signal(false);

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  formService = inject(FormService);
  authService = inject(AuthService);
  messageService = inject(MessageService);

  // userStore = inject(UserStore);

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  async onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.isLoading.set(true);
      this.authService
        .login(this.loginForm.value as LoginRequest)
        .pipe(
          tap((res) => {
            localStorage.setItem('token', res.accessToken);
          })
          // delay(1000),
          // switchMap(() => this.authService.getProfile()),
          // tap((res) => {
          //   this.userStore.user.set(res);
          // })
        )
        .subscribe({
          next: (res) => {
            if (res) {
              this.router.navigate(['/dashboard']);
              this.isLoading.set(false);
            }
          },
          error: (err) => {
            this.isLoading.set(false);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err.error.message,
            });
          },
        });
    }
  }
}
