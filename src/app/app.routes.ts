import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login-page.component';
import { SignupPageComponent } from './pages/signup/signup-page.component';

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
        loadComponent: () => import('./pages/dashboard/dashboard-page.component'),

        children: [

            {
                path: 'nonstarted',
                loadComponent: () => import('./pages/dashboard/components/nonstarted-page/nonstarted-page')
            },
            {
                path: 'inprogress',
                loadComponent: () => import('./pages/dashboard/components/inprogress-page/inprogress-page')
            },
            {
                path: 'paused',
                loadComponent: () => import('./pages/dashboard/components/paused-page/paused-page')},
            {
                path: 'late',
                loadComponent: () => import('./pages/dashboard/components/late-page/late-page')
            },
            {
                path: 'finished',
                loadComponent: () => import('./pages/dashboard/components/finished-page/finished-page')
            },
            

        ]
    }
];
