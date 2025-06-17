import { Component, signal, OnInit, inject, computed } from '@angular/core';
import { SectionHeader } from '@shared/components/section-header/section-header.component';

import { ButtonModule } from 'primeng/button';
import { ProjectEditModal } from '@modules/projects/components/project-edit/project-edit-modal/project-edit-modal.component';
import { ProjectsList } from '@modules/projects/components/projects-list/projects-list.component';
import { ProjectsService } from '@modules/projects/services/projects.service';
import type { Project } from '@modules/projects/models/project.model';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  providers: [ProjectsService],
  imports: [SectionHeader, ProjectsList, ButtonModule, ProjectEditModal],
})
export class HomeComponent implements OnInit {
  projectsService = inject(ProjectsService);

  isOpenProjectModal = signal<boolean>(false);
  projectToEdit = signal<Project | null>(null);

  isLoading = computed(() => this.projectsService.isLoading());
  projects = computed(() => this.projectsService.projects());

  ngOnInit() {
    this.projectsService.getUserProjects();
  }

  handleEditProject(project: Project) {
    this.projectToEdit.set(project);

    this.isOpenProjectModal.set(true);
  }

  handleAddProject() {
    this.projectToEdit.set(null);

    this.isOpenProjectModal.set(true);
  }
}
