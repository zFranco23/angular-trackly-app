import { Component, inject } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Avatar } from '../avatar/avatar.component';
import { SidebarItem } from './sidebar-item/sidebar-item.component';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [PanelMenuModule, SidebarItem, Avatar, ButtonModule],
})
export class Sidebar {
  private router = inject(Router);

  // Should abstract this in a service
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
