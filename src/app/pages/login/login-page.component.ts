import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LoginForm } from "../../components/login-form/login-form";

@Component({

    templateUrl: './login-page.component.html',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, LoginForm],
    styles: [`
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `]

})

export class LoginPageComponent {

    
}