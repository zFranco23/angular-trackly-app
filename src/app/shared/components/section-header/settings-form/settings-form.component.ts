import { Component, output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'settings-form',
  templateUrl: './settings-form.component.html',
  imports: [InputTextModule, FloatLabelModule],
})
export class SettingsForm {
  closeModal = output();

  handleSave() {
    this.closeModal.emit();
  }
}
