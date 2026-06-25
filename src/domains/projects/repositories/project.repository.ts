import type { Project } from "../models/project.model";

export interface ProjectRepository {
  findById(
    projectId: string,
  ): Promise<Project | null>;

  findAll(): Promise<Project[]>;

  save(
    project: Project,
  ): Promise<void>;
}
