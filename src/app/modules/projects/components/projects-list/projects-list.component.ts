import { Component, input, output } from '@angular/core';
import { ProjectsListItem } from './projects-list-item/project-list-item.component';
import { ProjectsSkeleton } from '../projects-skeleton/projects-skeleton.component';

import type { Project } from '@modules/projects/models/project.model';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  imports: [ProjectsListItem, ProjectsSkeleton],
})
export class ProjectsList {
  projects = input.required<Project[]>();
  isLoading = input.required<boolean>();

  editProject = output<any>();
}
