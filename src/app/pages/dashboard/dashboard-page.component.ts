import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    standalone: true,
    imports: [Sidebar]
})

export class DashboardPageComponent {}