import { Component } from '@angular/core';
import { SectionHeader } from '../../../../shared/components/section-header/section-header.component';
import { ProjectsList } from '../../../projects/components/projects-list/projects-list.component';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  imports: [SectionHeader, ProjectsList],
})
export class HomeComponent {}
