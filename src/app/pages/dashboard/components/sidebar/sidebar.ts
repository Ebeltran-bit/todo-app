import { Component } from '@angular/core';
import { SidebarHeaderComponent } from "./sidebar-header/sidebar-header"; // Imports the header section of the sidebar
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu"; // Imports the navigation menu section of the sidebar
import { Card } from "primeng/card"; // Enables the p-card component


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
  imports: [SidebarHeaderComponent, SidebarMenuComponent, Card],
  templateUrl: './sidebar.html',
  styleUrls: ['../../dashboard-styles.css']
})

export class SidebarComponent {

  
}