import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,  FormsModule, DatePickerModule, SelectModule],
  templateUrl: './task.html',
  styleUrls: ['./task-styles.css']
})

export class TaskComponent {
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
