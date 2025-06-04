import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'projects-list-item',
  templateUrl: './project-list-item.component.html',
  imports: [CardModule, ButtonModule],
})
export class ProjectsListItem {}
