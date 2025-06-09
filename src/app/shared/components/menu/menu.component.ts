import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [ButtonModule, DrawerModule],
})
export class Menu {
  visible = signal(false);

  openMenuDrawer() {
    this.visible.set(true);
  }
}
