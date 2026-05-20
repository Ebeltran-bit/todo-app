import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login-page.component';
import { SignupPageComponent } from './pages/signup/signup-page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';

export const routes: Routes = [

    {
        path: '',
        component: LoginPageComponent

    },
    
    {
        path: 'signup',
        component: SignupPageComponent
    },
  
    {
        path: 'dashboard',
        component: DashboardPageComponent
    }
];
