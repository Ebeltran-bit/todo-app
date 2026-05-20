import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardModule } from 'primeng/card';
import { Password } from "primeng/password";
import { Button } from "primeng/button";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CardModule, Password, Button]
})
export class LoginPageComponent {}