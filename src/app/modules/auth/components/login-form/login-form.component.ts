import { Component } from '@angular/core';
import { AppInput } from '../../../../shared/components/forms/input/input.component';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  imports: [ButtonModule, FloatLabelModule, PasswordModule, AppInput],
})
export class LoginForm {}
