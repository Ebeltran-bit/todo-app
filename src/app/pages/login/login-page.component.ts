import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardModule } from 'primeng/card';
import { PasswordModule } from "primeng/password"; 
import { ButtonModule } from "primeng/button";     
import { InputTextModule } from 'primeng/inputtext'; 


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    CardModule, 
    PasswordModule, 
    ButtonModule, 
    InputTextModule
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./styles.css'] 
})
export class LoginPageComponent {}