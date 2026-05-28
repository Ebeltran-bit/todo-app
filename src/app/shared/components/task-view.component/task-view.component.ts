import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TaskPanelService } from '../../../services/task-panel.service';

@Component({
  selector: 'app-task-view',
  imports: [ButtonModule],
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {
  taskPanel = inject(TaskPanelService);
}