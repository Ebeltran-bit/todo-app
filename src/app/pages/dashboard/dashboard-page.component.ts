import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar';
import TaskComponent from './components/task/task';
import { TaskPanelService } from '../../services/task-panel.service';
import { inject } from '@angular/core';
@Component({
    selector: 'app-dashboard-page',
    standalone: true,
    imports: [RouterModule, SidebarComponent, TaskComponent],
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-styles.css']
})
export default class DashboardPageComponent {

    taskPanel = inject(TaskPanelService);

}