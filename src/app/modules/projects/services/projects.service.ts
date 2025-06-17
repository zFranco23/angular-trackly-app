import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.development';
import { handleLoadingIndicator } from '@shared/operators/handle-loading-indicator.operator';
import type { CreateProjectRequest } from '../models/http';
import type { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  isLoading = signal<boolean>(false);
  projects = signal<Project[]>([]);

  http = inject(HttpClient);

  private projectsApiUrl = `${environment.apiUrl}/projects`;

  getUserProjects() {
    this.http
      .get<Project[]>(this.projectsApiUrl)
      .pipe(handleLoadingIndicator(this.isLoading))
      .subscribe((projects) => {
        this.projects.set(projects);
      });
  }

  createProject(body: CreateProjectRequest) {
    return this.http
      .post<Project>(this.projectsApiUrl, body)
      .pipe(tap(() => this.getUserProjects()));
  }
}
