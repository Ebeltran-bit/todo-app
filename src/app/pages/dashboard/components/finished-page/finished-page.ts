import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskViewComponent } from "../../../../shared/components/task-view.component/task-view.component";
import { Task, TasksAccordionComponent } from '../../../../shared/components/tasks-accordion.component/tasks-accordion.component';

@Component({
  selector: 'app-finished-page',
  imports: [TaskViewComponent, TasksAccordionComponent],
  templateUrl: './finished-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FinishedPageComponent {

  finishedTasks: Task[] = [
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
