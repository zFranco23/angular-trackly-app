import { Component, signal } from '@angular/core';
import { SectionHeader } from '../../../../shared/components/section-header/section-header.component';
import { ProjectsList } from '../../../projects/components/projects-list/projects-list.component';

import { ButtonModule } from 'primeng/button';
import { ProjectEditModal } from '../../../projects/components/project-edit/project-edit-modal/project-edit-modal.component';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  imports: [SectionHeader, ProjectsList, ButtonModule, ProjectEditModal],
})
export class HomeComponent {
  isOpenProjectModal = signal<boolean>(false);
}
