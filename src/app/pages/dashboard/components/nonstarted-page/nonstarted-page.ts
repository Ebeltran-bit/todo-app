import { Component } from '@angular/core';
import { TaskViewComponent } from "../../../../shared/components/task-view.component/task-view.component";
import { TasksAccordionComponent, Task } from "../../../../shared/components/tasks-accordion.component/tasks-accordion.component";

@Component({
  selector: 'app-nonstarted-page',
  standalone: true,
  imports: [TaskViewComponent, TasksAccordionComponent],
  templateUrl: './nonstarted-page.html',
})
export default class NonstartedPageComponent {

  nonstartedTasks: Task[] = [
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