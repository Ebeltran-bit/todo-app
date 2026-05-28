import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TaskViewComponent } from "../../../../shared/components/task-view.component/task-view.component";

interface NonstartedTasks {
  task: string;
  date: Date;
  subtask: string;
  category: string;
}

@Component({
  selector: 'app-nonstarted-page',
  standalone: true,
  imports: [TaskViewComponent, CommonModule, AccordionModule],
  templateUrl: './nonstarted-page.html',
})
export default class NonstartedPageComponent {
  nonstartedTasks: NonstartedTasks[] = [
    { 
      task: "Task 1", 
      date: new Date("2026-06-01"), 
      subtask: "Subtask 1", 
      category: "Category 1" 
    },

    { 
      task: "Task 2", 
      date: new Date("2026-06-04"), 
      subtask: "Subtask 2", 
      category: "Category 2" 
    },

    { 
      task: "Task 3", 
      date: new Date("2026-06-10"), 
      subtask: "Subtask 3", 
      category: "Category 1" 
    }
  ];
}