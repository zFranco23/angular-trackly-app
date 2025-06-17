import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  FormControlName,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { TextareaModule } from 'primeng/textarea';
import { WithErrorComponent } from '../with-error/with-error.component';
import { WithLabelComponent } from '../with-label/with-label.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  imports: [
    FloatLabelModule,
    ReactiveFormsModule,
    CommonModule,
    MessageModule,
    TextareaModule,
    WithErrorComponent,
    WithLabelComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextArea),
      multi: true,
    },
  ],
})
export class TextArea implements ControlValueAccessor {
  formControlName = input<FormControlName['name']>(null);
  label = input.required<string>();
  id = input.required<string>();

  value = signal<string>('');

  onChange = (_: any) => {};
  onTouched = () => {};

  disabled = signal<boolean>(false);

  error = input<string | null>(null);

  writeValue(value: any): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  updateValue(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value.set(newValue);
    this.onChange(newValue);
    this.onTouched();
  }
}
