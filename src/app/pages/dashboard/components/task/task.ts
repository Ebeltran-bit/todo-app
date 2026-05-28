import { Component, inject} from '@angular/core';
import { TaskPanelService } from '../../../../services/task-panel.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { Card } from "primeng/card";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, DatePickerModule, SelectModule, Card],
  templateUrl: './task.html',
  styleUrls: ['./task-styles.css']
})

export default class TaskComponent {

  taskPanel = inject(TaskPanelService);

  categories = [
    { name: 'Category 1' },
    { name: 'Category 2' }
  ];
  status = [
    { name: 'Non started' },
    { name: 'In progress' },
    { name: 'Paused' },
    { name: 'Late' },
    { name: 'Finished' }
  ];
  selectedCategory: any = null;
  selectedStatus: any = null;
  dueDate: Date | null = null;
}
