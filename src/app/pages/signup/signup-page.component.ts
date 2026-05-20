import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Password } from "primeng/password";
import { Button } from "primeng/button";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  standalone: true,
  imports: [CardModule, Password, Button]
})
export class SignupPageComponent {}