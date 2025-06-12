import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  FormControlName,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { WithErrorComponent } from '../with-error/with-error.component';
import { WithLabelComponent } from '../with-label/with-label.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  imports: [
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    CommonModule,
    WithErrorComponent,
    WithLabelComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppInput),
      multi: true,
    },
  ],
})
export class AppInput implements ControlValueAccessor {
  formControlName = input<FormControlName['name']>(null);
  label = input.required<string>();
  id = input.required<string>();

  value = signal<string>('');

  onChange = (_: any) => {};
  onTouched = () => {};

  disabled = signal<boolean>(false);

  error = input<string | null>(null);

  writeValue(value: string): void {
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
