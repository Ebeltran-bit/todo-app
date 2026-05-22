import {  Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuOption {
  label: string;
  route: string;
  icon: string;
}

interface CategoryOption {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar-menu.html',
  styleUrls: ['../../../dashboard-styles.css']
})

export class SidebarMenuComponent {
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

  categoryOptions: CategoryOption[] = [
    {
      label: 'Category 1',
      route: '/dashboard/category-1',
      icon: 'pi pi-circle-fill icon-red'
    },
    
    {
      label: 'Category 2',
      route: '/dashboard/category-2',
      icon: 'pi pi-circle-fill icon-green'
    },

    {
      label: 'Add New List',
      route: '/dashboard/add-list',
      icon: 'pi pi-plus'
    }
  ]

  

}
