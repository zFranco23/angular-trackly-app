import { Component, input } from '@angular/core';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'with-error',
  templateUrl: './with-error.component.html',
  imports: [MessageModule],
})
export class WithErrorComponent {
  error = input<string | null>(null);
}
