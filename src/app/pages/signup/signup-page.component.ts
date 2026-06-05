import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { CardModule } from 'primeng/card'; // Enables the p-card component
import { PasswordModule } from "primeng/password"; // Enables the p-password component with toggleMask and feedback options
import { ButtonModule } from "primeng/button"; // Enables the p-button component    
import { InputTextModule } from 'primeng/inputtext'; // Applies PrimeNG styling to native input elements with pInputText

@Component({
  selector: 'app-signup-page', 
  imports: [
    CardModule, PasswordModule, ButtonModule, InputTextModule, RouterLink ],
  templateUrl: './signup-page.component.html', 
  styleUrls: ['./styles.css'] 
})

export class SignupPageComponent {}