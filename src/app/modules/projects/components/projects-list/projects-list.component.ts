import { Component } from '@angular/core';
import { ProjectsListItem } from './projects-list-item/project-list.component';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  imports: [ProjectsListItem],
})
export class ProjectsList {
  projects = [];
}
