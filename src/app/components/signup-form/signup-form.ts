import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.html',
  standalone: true,
  imports: [RouterLink, InputTextModule, PasswordModule, ButtonModule]
})
export class SignupForm {}