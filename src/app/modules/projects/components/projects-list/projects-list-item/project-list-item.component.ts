import { Component, input, output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import type { Project } from '@modules/projects/models/project.model';

@Component({
  selector: 'projects-list-item',
  templateUrl: './project-list-item.component.html',
  imports: [CardModule, ButtonModule],
  styleUrls: ['./project-list-item.component.scss'],
})
export class ProjectsListItem {
  project = input.required<Project>();

  editClickBtn = output<Project>();

  handleEditProject() {
    this.editClickBtn.emit(this.project());
  }
}
