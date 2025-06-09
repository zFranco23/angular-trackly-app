import { Component, signal, viewChild } from '@angular/core';
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

  settingsForm = viewChild.required(SettingsForm);

  toggleShow() {
    this.showDrawer.update((ps) => !ps);
  }

  closeModal() {
    this.showDrawer.set(false);
  }

  handleSave() {
    const editFormInstance = this.settingsForm();
    editFormInstance.handleSubmit();
  }
}
