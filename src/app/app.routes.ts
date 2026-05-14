import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login-page.component';
import { SigninPageComponent } from './pages/signin/signin-page.component';

export const routes: Routes = [

    {
        path: '',
        component: LoginPageComponent

    },
    
    {
        path: 'signin',
        component: SigninPageComponent
    }
];
