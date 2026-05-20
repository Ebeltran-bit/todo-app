import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Necesario para routerLink
import { CardModule } from 'primeng/card';
import { PasswordModule } from "primeng/password"; // Importa el módulo completo
import { ButtonModule } from "primeng/button";     // Importa el módulo completo
import { InputTextModule } from 'primeng/inputtext'; // Necesario para pInputText

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    CardModule, 
    PasswordModule, 
    ButtonModule, 
    InputTextModule, 
    RouterLink
  ],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./styles.css'] 
})
export class SignupPageComponent {}