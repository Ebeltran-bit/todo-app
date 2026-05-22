import {  Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuOption {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar-menu.html',
  styleUrls: ['../../../styles.css']
})

export class SidebarMenuComponent {
  menuOptions: MenuOption[] = [ 

    {
      label: 'Non started',
      route: '/dashboard/non-started',
      icon: 'pi pi-times-circle'
    },
    {
      label: 'In progress',
      route: '/dashboard/in-progress',
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

  

}
