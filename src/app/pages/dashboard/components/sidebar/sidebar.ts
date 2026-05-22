import { Component } from '@angular/core';
import { SidebarHeaderComponent } from "./sidebar-header/sidebar-header";
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu";


interface MenuOption {
  label: string;
  route: string;
  icon: string;
}

/**
 * Sidebar component for navigation and filtering tasks by status and category
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarHeaderComponent, SidebarMenuComponent],
  templateUrl: './sidebar.html',
  styleUrls: ['../../dashboard-styles.css']
})

export class SidebarComponent {

  
}