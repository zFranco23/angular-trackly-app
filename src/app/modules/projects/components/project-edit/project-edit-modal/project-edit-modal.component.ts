import {
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  signal,
} from '@angular/core';

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
import { ProjectsService } from '@modules/projects/services/projects.service';
import {
  CreateProjectRequest,
  UpdateProjectRequest,
} from '@modules/projects/models/http';
import { finalize, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { REGEX } from '@core/constants/regex';

import type { Project } from '@modules/projects/models/project.model';

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
  project = input<Project | null>(null);
  isSaving = signal<boolean>(false);

  isEditing = computed(() => !!this.project());
  title = computed(() => (this.isEditing() ? 'Edit project' : 'Add project'));

  formsService = inject(FormService);
  projectsService = inject(ProjectsService);
  messageService = inject(MessageService);

  /** Forms control */
  private formBuilder = inject(FormBuilder);

  editForm = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(50)],
    ],
    repository: [
      '',
      [
        Validators.required,
        CustomValidators.pattern(REGEX.URL, 'Invalid repository URL'),
      ],
    ],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ],
    ],
  });

  setInitialValuesEffect = effect(() => {
    if (this.show() && this.project()) {
      this.editForm.patchValue({
        name: this.project()!.name,
        repository: this.project()!.repository,
        description: this.project()!.description,
      });

      this.editForm.markAsPristine();
    } else {
      this.editForm.reset();
    }
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
      if (this.isEditing()) {
        this.isSaving.set(true);
        this.projectsService
          .updateProject(
            this.project()!.id,
            this.editForm.value as UpdateProjectRequest
          )
          .pipe(
            tap(() => {
              this.messageService.add({
                severity: 'success',
                summary: 'Project updated',
                detail: 'Project updated successfully',
              });
              this.show.set(false);
            }),

            finalize(() => {
              this.isSaving.set(false);
            })
          )
          .subscribe();
      } else {
        this.isSaving.set(true);
        this.projectsService
          .createProject(this.editForm.value as CreateProjectRequest)
          .pipe(
            tap(() => {
              this.messageService.add({
                severity: 'success',
                summary: 'Project created',
                detail: 'Project created successfully',
              });
              this.show.set(false);
            }),

            finalize(() => {
              this.isSaving.set(false);
            })
          )
          .subscribe();
      }
    }
  }
}
