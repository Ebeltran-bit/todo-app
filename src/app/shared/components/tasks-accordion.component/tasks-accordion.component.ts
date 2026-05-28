import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';

export interface Task {
  task: string;
  date: Date;
  subtask: string;
  category: string;
}

@Component({
  selector: 'app-tasks-accordion',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  templateUrl: './tasks-accordion.component.html',
})
export class TasksAccordionComponent {
  @Input() tasks: Task[] = [];
}