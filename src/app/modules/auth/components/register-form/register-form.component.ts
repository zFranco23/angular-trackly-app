import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { delay, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageService } from 'primeng/api';

import { WithErrorComponent } from '@shared/components/forms/with-error/with-error.component';
import { AppInput } from '@shared/components/forms/input/input.component';
import { WithLabelComponent } from '@shared/components/forms/with-label/with-label.component';
import { FormService } from '@shared/services/form.service';
import { handleLoadingIndicator } from '@shared/operators/handle-loading-indicator.operator';

import { RegisterRequest } from '@modules/auth/models/http/request.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
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
export class RegisterForm {
  isLoading = signal(false);

  private formBuilder = inject(FormBuilder);

  formService = inject(FormService);
  authService = inject(AuthService);
  router = inject(Router);

  messageService = inject(MessageService);

  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async onSubmit() {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {
      this.authService
        .registerUser(this.registerForm.value as RegisterRequest)
        .pipe(
          handleLoadingIndicator(this.isLoading),
          tap(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'User registered successfully',
            });
          }),
          delay(1000),
          tap(() => this.router.navigate(['/login']))
        )
        .subscribe();
    }
  }
}
