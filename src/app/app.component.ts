import { Component } from '@angular/core';
import { Sidebar } from './shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [Sidebar, RouterOutlet],
})
export class AppComponent {
  title = 'trackly-app';
}
