import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.development';
import type { Project } from '../models/project.model';
import { handleLoadingIndicator } from '@shared/operators/handle-loading-indicator.operator';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  isLoading = signal<boolean>(false);
  projects = signal<Project[]>([]);

  http = inject(HttpClient);

  getUserProjects() {
    this.http
      .get<Project[]>(`${environment.apiUrl}/projects`)
      .pipe(handleLoadingIndicator(this.isLoading))
      .subscribe((projects) => {
        this.projects.set(projects);
      });
  }
}
