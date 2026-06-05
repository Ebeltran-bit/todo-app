import { Component } from '@angular/core';
import { TaskViewComponent } from "../../../../shared/components/task-view.component/task-view.component";
import { Task, TasksAccordionComponent } from '../../../../shared/components/tasks-accordion.component/tasks-accordion.component';

@Component({
  selector: 'app-paused-page',
  imports: [TaskViewComponent, TasksAccordionComponent],
  templateUrl: './paused-page.html',
})
export default class PausedPageComponent {

  pausedTasks: Task[] = [
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
