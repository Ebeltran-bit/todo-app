import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskViewComponent } from "../../../../shared/components/task-view.component/task-view.component";

@Component({
  selector: 'app-late-page',
  imports: [TaskViewComponent],
  templateUrl: './late-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LatePageComponent {}
