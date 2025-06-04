import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { DrawerModule } from 'primeng/drawer';

import { SettingsForm } from '../settings-form/settings-form.component';

@Component({
  selector: 'settings-drawer',
  templateUrl: './settings-drawer.component.html',
  imports: [DrawerModule, ButtonModule, SettingsForm],
})
export class SettingsDrawer {
  showDrawer = signal(false);

  toggleShow() {
    this.showDrawer.update((ps) => !ps);
  }
}
