import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

import { DefaultLayout } from '../default/default.component';
@Component({
  selector: 'private-layout',
  templateUrl: './private.component.html',
  imports: [Sidebar, RouterOutlet, DefaultLayout],
})
export class PrivateLayoutComponent {}
