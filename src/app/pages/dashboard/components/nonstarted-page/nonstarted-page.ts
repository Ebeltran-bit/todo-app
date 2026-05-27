import {Component } from '@angular/core';
import { TaskViewComponent } from "../../../../shared/components/task-view.component/task-view.component";

@Component({
  selector: 'app-nonstarted-page',
  imports: [TaskViewComponent],
  templateUrl: './nonstarted-page.html',
})
export default class NonstartedPageComponent {}
