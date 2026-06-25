import type { ProjectRepository }
  from "../repositories/project.repository";

export interface ProjectQueryDependencies {
  projectRepository: ProjectRepository;
}
