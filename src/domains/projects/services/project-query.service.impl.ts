import type { Project }
  from "../models/project.model";

import type {
  ProjectQueryDependencies,
} from "./project-query.dependencies";

import type {
  ProjectQueryService,
} from "./project-query.service";

export class ProjectQueryServiceImpl
  implements ProjectQueryService
{
  private readonly projectRepository;

  constructor(
    dependencies: ProjectQueryDependencies,
  ) {
    this.projectRepository =
      dependencies.projectRepository;
  }

  async getProject(
    projectId: string,
  ): Promise<Project | null> {
    return this.projectRepository.findById(
      projectId,
    );
  }

  async getProjects(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }
}
