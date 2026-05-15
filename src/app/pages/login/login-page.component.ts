import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginForm } from '../../components/login-form/login-form';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginForm, CardModule]
})
export class LoginPageComponent {}