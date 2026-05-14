import { Component } from "@angular/core";
import { SignupForm } from "../../components/signup-form/signin-form";

@Component({

    templateUrl: './signup-page.component.html',
    standalone: true,
    styles: [`
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `],
    imports: [SignupForm]

})

export class SignupPageComponent {

    
}