import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Enables ngModel for two-way data binding on inputs
import { ButtonModule } from 'primeng/button'; // Enables the p-button component

// Interface that defines the shape of each navigation menu option
interface MenuOption {
  label: string;
  route: string;
  icon: string;
}

// Interface that defines the shape of each category option
interface CategoryOption {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule, ButtonModule],
  templateUrl: './sidebar-menu.html',
  styleUrls: ['../../../dashboard-styles.css']
})

export class SidebarMenuComponent {

  showAddCategory = false; // Controls the visibility of the add category input field
  newCategoryName = ''; // Stores the name of the new category typed by the user

  // Toggles the visibility of the add category input field
  toggleAddCategory(event: Event) {
    event.preventDefault();
    this.showAddCategory = !this.showAddCategory;
  }

  // tasks by status
  menuOptions: MenuOption[] = [ 
    {
      label: 'Non started',
      route: '/dashboard/nonstarted',
      icon: 'pi pi-times-circle'
    },
    {
      label: 'In progress',
      route: '/dashboard/inprogress',
      icon: 'pi pi-spinner'
    },
    {
      label: 'Paused',
      route: '/dashboard/paused',
      icon: 'pi pi-pause'
    },
    {
      label: 'Late',
      route: '/dashboard/late',
      icon: 'pi pi-exclamation-triangle'
    },
    {
      label: 'Finished',
      route: '/dashboard/finished',
      icon: 'pi pi-check'
    }
  ]

  // tasks by category
  categoryOptions: CategoryOption[] = [
    {
      label: 'Category 1',
      route: '/dashboard/category',
      icon: 'pi pi-circle-fill icon-red'
    },
    {
      label: 'Category 2',
      route: '/dashboard/category',
      icon: 'pi pi-circle-fill icon-green'
    },
  ]
}