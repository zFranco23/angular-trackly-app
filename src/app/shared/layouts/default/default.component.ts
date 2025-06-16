import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'default-layout',
  templateUrl: './default.component.html',
  imports: [ToastModule],
})
export class DefaultLayout {}
