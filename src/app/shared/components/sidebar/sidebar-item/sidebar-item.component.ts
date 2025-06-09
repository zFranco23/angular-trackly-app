import { Component, input, signal } from '@angular/core';
import { SidebarItem as SidebarItemModel } from '../../../../core/models';
import { TitleCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  imports: [TitleCasePipe, RouterLink, RouterLinkActive],
})
export class SidebarItem {
  link = input<string>('');
  icon = input.required<SidebarItemModel['icon']>();
  title = input.required<SidebarItemModel['title']>();
  children = input<Omit<SidebarItemModel, 'icon'>[]>([]);

  isExpanded = signal(false);

  toggleExpanded() {
    this.isExpanded.update((ps) => !ps);
  }
}
