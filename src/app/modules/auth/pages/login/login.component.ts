import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form.component';
import { DefaultLayout } from '../../../../shared/layouts/default/default.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [LoginForm, DefaultLayout],
})
export class LoginComponent {}
