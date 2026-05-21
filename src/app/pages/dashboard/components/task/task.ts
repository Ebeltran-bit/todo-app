import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './task.html',
  styleUrls: ['../../styles.css']
})

export class TaskComponent {}
