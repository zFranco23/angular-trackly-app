import { Component, inject, output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AppInput } from '../../forms/input/input.component';
import { FormService } from '@shared/services/form.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'settings-form',
  templateUrl: './settings-form.component.html',
  imports: [InputTextModule, FloatLabelModule, AppInput, ReactiveFormsModule],
  providers: [FormService],
})
export class SettingsForm {
  closeModal = output();

  private formBuilder = inject(FormBuilder);

  editForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  formsService = inject(FormService);

  handleCloseModal() {
    this.closeModal.emit();
  }

  handleSubmit() {
    this.editForm.markAllAsTouched();

    if (this.editForm.valid) {
      console.log(this.editForm.value);
    }
  }
}
