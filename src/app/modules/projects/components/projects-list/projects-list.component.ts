import { Component, output, signal } from '@angular/core';
import { ProjectsListItem } from './projects-list-item/project-list-item.component';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  imports: [ProjectsListItem],
})
export class ProjectsList {
  projects = [];

  editProject = output<any>();
}
