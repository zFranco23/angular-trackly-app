import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'private-layout',
  templateUrl: './private.component.html',
  imports: [Sidebar, RouterOutlet],
})
export class PrivateLayoutComponent {}
