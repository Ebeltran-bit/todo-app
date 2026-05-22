import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-late-page',
  imports: [],
  templateUrl: './late-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LatePageComponent {}
