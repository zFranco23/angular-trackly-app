import { Component, input, signal } from '@angular/core';
import { SidebarItem as SidebarItemModel } from '../../../core/models';
import { SidebarItemType as SidebarItemTypeEnum } from '../../../core/enums/ui.enum';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  imports: [TitleCasePipe],
})
export class SidebarItem {
  SidebarItemTypeEnum = SidebarItemTypeEnum;

  title = input.required<SidebarItemModel['title']>();
  children = input<SidebarItemModel[]>([]);

  isExpanded = signal(false);

  toggleExpanded() {
    this.isExpanded.update((ps) => !ps);
  }
}
