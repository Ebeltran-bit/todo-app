import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar';
import { TaskComponent } from "./components/task/task";

@Component({
    selector: 'app-dashboard-page',
    standalone: true,
    imports: [RouterModule, SidebarComponent, TaskComponent],
    templateUrl: './dashboard-page.component.html',
    styleUrl: './styles.css'
})
export default class DashboardPageComponent {}