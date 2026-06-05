import { Component } from '@angular/core';
import { TaskViewComponent } from "../../../../shared/components/task-view.component/task-view.component";
import { Task, TasksAccordionComponent } from '../../../../shared/components/tasks-accordion.component/tasks-accordion.component';

@Component({
  selector: 'app-late-page',
  imports: [TaskViewComponent, TasksAccordionComponent],
  templateUrl: './late-page.html',
})
export default class LatePageComponent {

  lateTasks: Task[] = [
      { 
        task: "Task 1", 
        date: new Date("2026-06-01"), 
        subtask: "Subtask 1", 
        category: "Category 1" 
      }
  
    ];

}
