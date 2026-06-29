import type { Project }
  from "../../../domains/projects/models/project.model";

import type { ProjectRepository }
  from "../../../domains/projects/repositories/project.repository";

export class InMemoryProjectRepository
  implements ProjectRepository
{
  private readonly projects =
    new Map<string, Project>();

  async findById(
    projectId: string,
  ): Promise<Project | null> {
    return this.projects.get(projectId) ?? null;
  }

  async findAll(): Promise<Project[]> {
    return [...this.projects.values()];
  }

  async save(
    project: Project,
  ): Promise<void> {
    this.projects.set(
      project.projectId,
      project,
    );
  }
}
