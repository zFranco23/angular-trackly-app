import { Component, input, output, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'projects-list-item',
  templateUrl: './project-list-item.component.html',
  imports: [CardModule, ButtonModule],
})
export class ProjectsListItem {
  project = input.required();

  editClickBtn = output<any>();

  handleEditProject() {
    this.editClickBtn.emit(this.project);
  }
}
