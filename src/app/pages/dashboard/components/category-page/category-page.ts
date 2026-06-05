import {Component } from '@angular/core';
import { TaskViewComponent } from "../../../../shared/components/task-view.component/task-view.component";
import { Task, TasksAccordionComponent } from '../../../../shared/components/tasks-accordion.component/tasks-accordion.component';


@Component({
  selector: 'app-category-page',
  imports: [TaskViewComponent, TasksAccordionComponent],
  templateUrl: './category-page.html',
})
export default class CategoryPageComponent {

  categoryTasks: Task[] = [
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
        }
      ];
}
