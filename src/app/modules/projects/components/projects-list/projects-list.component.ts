import { Component, signal } from '@angular/core';
import { ProjectsListItem } from './projects-list-item/project-list-item.component';
import { ProjectEditModal } from '../project-edit/project-edit-modal/project-edit-modal.component';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  imports: [ProjectsListItem, ProjectEditModal],
})
export class ProjectsList {
  projects = [];
  projectToEdit = signal<any>(null);
  isOPenEditModal = signal(false);

  setProjectToEdit(project: any) {
    this.projectToEdit.set(project);
  }

  handleEditProject(project: any) {
    this.setProjectToEdit(project);
    this.openEditModal();
  }

  openEditModal() {
    this.isOPenEditModal.set(true);
  }

  closeEditModal() {
    this.isOPenEditModal.set(false);
  }
}
