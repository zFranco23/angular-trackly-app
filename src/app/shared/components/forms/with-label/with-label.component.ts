import { Component, input } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'with-label',
  templateUrl: './with-label.component.html',
  imports: [FloatLabelModule],
})
export class WithLabelComponent {
  inputId = input.required<string>();
  label = input.required<string>();
}
