import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Avatar } from '../avatar/avatar.component';
import { SidebarItem } from './sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [PanelMenuModule, SidebarItem, Avatar],
})
export class Sidebar {}
