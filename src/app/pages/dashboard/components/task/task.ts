import { Component, inject} from '@angular/core';
import { TaskPanelService } from '../../../../services/task-panel.service'; // Service that controls the visibility of the task panel
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { DatePickerModule } from 'primeng/datepicker'; // Enables the p-datepicker component for date selection
import { SelectModule } from 'primeng/select'; // Enables the p-select component for dropdown selection
import { Card } from "primeng/card"; // Enables the p-card component

@Component({
  selector: 'app-task', 
  imports: [RouterLink, RouterLinkActive, FormsModule, DatePickerModule, SelectModule, Card],
  templateUrl: './task.html', 
  styleUrls: ['./task-styles.css'] 
})

export default class TaskComponent {

  taskPanel = inject(TaskPanelService); // Injects the TaskPanelService to close the task panel from the template

  // Categories for the task
  categories = [
    { name: 'Category 1' },
    { name: 'Category 2' }
  ];

  // Status options for the task
  status = [
    { name: 'Non started' },
    { name: 'In progress' },
    { name: 'Paused' },
    { name: 'Late' },
    { name: 'Finished' }
  ];

  selectedCategory: any = null; // Stores the category selected by the user
  selectedStatus: any = null; // Stores the status selected by the user
  dueDate: Date | null = null; // Stores the due date selected by the user
}