import { Component, computed, inject, input, model } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppInput } from '@shared/components/forms/input/input.component';
import { FormService } from '@shared/services/form.service';
import { TextArea } from '../../../../../shared/components/forms/textarea/textarea.component';
import { CustomValidators } from '@shared/utils/validators';

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
    ReactiveFormsModule,
    AppInput,
    TextArea,
  ],
  providers: [FormService],
})
export class ProjectEditModal {
  show = model.required<boolean>();
  project = input<any>();

  isEditing = computed(() => !!this.project);
  title = computed(() => (this.isEditing() ? 'Edit project' : 'Add project'));

  formsService = inject(FormService);

  /** Forms control */
  private formBuilder = inject(FormBuilder);

  editForm = this.formBuilder.group({
    projectName: ['', Validators.required],
    repository: [
      '',
      [
        Validators.required,
        CustomValidators.pattern('https://.*', 'Invalid repository URL'),
      ],
    ],
    description: ['', Validators.required],
  });

  get isValidForm() {
    return this.editForm.valid && !this.editForm.pristine;
  }

  handleVisibleChange(visible: boolean) {
    this.show.set(visible);
  }

  handleSubmit() {
    this.editForm.markAllAsTouched();

    if (this.editForm.valid) {
      console.log('Form is valid');
      console.log(this.editForm.value);
    }
  }
}
