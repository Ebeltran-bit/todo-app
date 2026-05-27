import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskViewComponent } from "../../../../shared/components/task-view.component/task-view.component";

@Component({
  selector: 'app-paused-page',
  imports: [TaskViewComponent],
  templateUrl: './paused-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PausedPageComponent {}
