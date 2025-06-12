import { Component } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [LoginForm],
})
export class LoginComponent {}
