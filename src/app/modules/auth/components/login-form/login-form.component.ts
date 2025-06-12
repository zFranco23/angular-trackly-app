import { Component, inject } from '@angular/core';
import { AppInput } from '../../../../shared/components/forms/input/input.component';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '@shared/services/form.service';
import { WithErrorComponent } from '../../../../shared/components/forms/with-error/with-error.component';
import { WithLabelComponent } from '../../../../shared/components/forms/with-label/with-label.component';
import { Router } from '@angular/router';

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
  providers: [FormService],
})
export class LoginForm {
  private formBuilder = inject(FormBuilder);

  private router = inject(Router);

  formService = inject(FormService);

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      localStorage.setItem('token', 'token');
      this.router.navigate(['/dashboard']);
    }
  }
}
