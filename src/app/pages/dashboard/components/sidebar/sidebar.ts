import { Component } from '@angular/core';
import { SidebarHeaderComponent } from "./sidebar-header/sidebar-header";
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu";

/**
 * Sidebar component for navigation and filtering tasks by status and category
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarHeaderComponent, SidebarMenuComponent],
  templateUrl: './sidebar.html',
  styleUrls: ['../../styles.css']
})
export class SidebarComponent {
  
}