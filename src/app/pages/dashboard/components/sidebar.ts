import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Sidebar component for navigation and filtering tasks by status and category
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['../styles.css']
})
export class Sidebar {
  
}