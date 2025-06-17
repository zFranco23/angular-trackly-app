import { Component, OnInit, inject } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

import { DefaultLayout } from '../default/default.component';
import { UserStore } from '@modules/auth/stores/user.store';
@Component({
  selector: 'private-layout',
  templateUrl: './private.component.html',
  imports: [Sidebar, RouterOutlet, DefaultLayout],
})
export class PrivateLayoutComponent implements OnInit {
  private userStore = inject(UserStore);

  ngOnInit(): void {
    this.userStore.getUserProfile();
  }
}
