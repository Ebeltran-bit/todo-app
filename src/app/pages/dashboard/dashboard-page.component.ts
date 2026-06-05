import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Enables router-outlet and routing directives in the template
import { SidebarComponent } from './components/sidebar/sidebar'; // Imports the left sidebar component
import TaskComponent from './components/task/task'; // Imports the task panel component for creating new tasks
import { TaskPanelService } from '../../services/task-panel.service'; // Service that controls the visibility of the task panel
import { inject } from '@angular/core'; // Angular function to inject services without using the constructor

@Component({
    selector: 'app-dashboard-page', 
    imports: [RouterModule, SidebarComponent, TaskComponent],
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-styles.css'] 
})

export default class DashboardPageComponent {

    taskPanel = inject(TaskPanelService); // Injects the TaskPanelService to open and close the task panel from the template

}