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
                loadComponent: () => import('./pages/dashboard/components/nonstarted-page/nonstarted-page')
            },
            {
                path: 'paused',
                loadComponent: () => import('./pages/dashboard/components/nonstarted-page/nonstarted-page')
            },
            {
                path: 'late',
                loadComponent: () => import('./pages/dashboard/components/nonstarted-page/nonstarted-page')
            },
            {
                path: 'finished',
                loadComponent: () => import('./pages/dashboard/components/nonstarted-page/nonstarted-page')
            },
            {
                path: 'category-1',
                loadComponent: () => import('./pages/dashboard/components/nonstarted-page/nonstarted-page')
            },
            {
                path: 'category-2',
                loadComponent: () => import('./pages/dashboard/components/nonstarted-page/nonstarted-page')
            },

        ]
    }
];
