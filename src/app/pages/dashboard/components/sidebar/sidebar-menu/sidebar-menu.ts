import {  Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu.html',
  styleUrls: ['../../../styles.css']
})

export class SidebarMenuComponent {}
