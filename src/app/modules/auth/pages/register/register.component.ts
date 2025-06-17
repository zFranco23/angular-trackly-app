import { Component } from '@angular/core';
import { DefaultLayout } from '../../../../shared/layouts/default/default.component';
import { RegisterForm } from '../../components/register-form/register-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [RegisterForm, DefaultLayout, RouterLink],
})
export class RegisterComponent {}
