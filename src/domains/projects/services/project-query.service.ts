import type { Project } from "../models/project.model";

export interface ProjectQueryService {
  getProject(
    projectId: string,
  ): Promise<Project | null>;

  getProjects(): Promise<Project[]>;
}
