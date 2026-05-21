import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
    selector: 'app-dashboard-page',
    standalone: true,
    imports: [Sidebar, RouterModule],
    templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {}