export interface CreateProjectRequest {
  name: string;
  repository: string;
  description: string;
}

export interface UpdateProjectRequest extends Partial<CreateProjectRequest> {}
