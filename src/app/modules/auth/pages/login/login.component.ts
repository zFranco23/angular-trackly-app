import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form.component';
import { DefaultLayout } from '../../../../shared/layouts/default/default.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [LoginForm, DefaultLayout, RouterLink],
})
export class LoginComponent {}
