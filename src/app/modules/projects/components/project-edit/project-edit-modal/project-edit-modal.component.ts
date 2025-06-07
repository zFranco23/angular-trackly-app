import { Component, computed, input, model } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'project-edit-modal',
  templateUrl: './project-edit-modal.component.html',
  imports: [
    DialogModule,
    FloatLabelModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    FileUploadModule,
  ],
})
export class ProjectEditModal {
  show = model.required<boolean>();

  project = input<any>();

  isEditing = computed(() => !!this.project);

  title = computed(() => (this.isEditing() ? 'Edit project' : 'Add project'));

  handleVisibleChange(visible: boolean) {
    this.show.set(visible);
  }
}
