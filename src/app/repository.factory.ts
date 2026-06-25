import type { TaskRepository } from "../domains/tasks/repositories/task.repository";
import type { EventRepository } from "../domains/event-log/repositories/event.repository";
import type { WorkDayRepository } from "../domains/work-days/repositories/work-day.repository";

import type { AreaRepository } from "../domains/areas/repositories/area.repository";
import type { ProjectRepository } from "../domains/projects/repositories/project.repository";
import type { SiteRepository } from "../domains/sites/repositories/site.repository";
import type { ContractorRepository } from "../domains/contractors/repositories/contractor.repository";

import type { EnvironmentConfiguration } from "../infrastructure/configuration/environment.configuration";

import { NotionApiClientImpl } from "../infrastructure/api/clients/notion-api-client.impl";

import { InMemoryTaskRepository } from "../infrastructure/repositories/in-memory-task.repository";
import { InMemoryEventRepository } from "../infrastructure/repositories/in-memory-event.repository";
import { InMemoryWorkDayRepository } from "../infrastructure/repositories/in-memory-work-day.repository";

import { InMemoryAreaRepository } from "../infrastructure/repositories/in-memory-area.repository";
import { InMemoryProjectRepository } from "../infrastructure/repositories/in-memory-project.repository";
import { InMemorySiteRepository } from "../infrastructure/repositories/in-memory-site.repository";
import { InMemoryContractorRepository } from "../infrastructure/repositories/in-memory-contractor.repository";

import { NotionTaskRepository } from "../infrastructure/repositories/notion-task.repository";
import { NotionEventRepository } from "../infrastructure/repositories/notion-event.repository";

export interface RepositoryFactory {
  createTaskRepository(): TaskRepository;

  createEventRepository(): EventRepository;

  createWorkDayRepository(): WorkDayRepository;

  createAreaRepository(): AreaRepository;

  createProjectRepository(): ProjectRepository;

  createSiteRepository(): SiteRepository;

  createContractorRepository(): ContractorRepository;
}

export class InMemoryRepositoryFactory
  implements RepositoryFactory
{
  private readonly workDayRepository =
    new InMemoryWorkDayRepository();

  public createTaskRepository(): TaskRepository {
    return new InMemoryTaskRepository();
  }

  public createEventRepository(): EventRepository {
    return new InMemoryEventRepository();
  }

  public createWorkDayRepository(): WorkDayRepository {
    return this.workDayRepository;
  }

  public createAreaRepository(): AreaRepository {
    return new InMemoryAreaRepository();
  }

  public createProjectRepository(): ProjectRepository {
    return new InMemoryProjectRepository();
  }

  public createSiteRepository(): SiteRepository {
    return new InMemorySiteRepository();
  }

  public createContractorRepository(): ContractorRepository {
    return new InMemoryContractorRepository();
  }
}

export class NotionRepositoryFactory
  implements RepositoryFactory
{
  private readonly configuration: EnvironmentConfiguration;

  private readonly notionClient: NotionApiClientImpl;

  constructor(
    configuration: EnvironmentConfiguration,
  ) {
    this.configuration = configuration;

    this.notionClient =
      new NotionApiClientImpl(
        configuration.notionApiToken,
      );
  }

  public createTaskRepository(): TaskRepository {
    return new NotionTaskRepository(
      this.notionClient,
      this.configuration,
    );
  }

  public createEventRepository(): EventRepository {
    return new NotionEventRepository(
      this.notionClient,
      this.configuration,
    );
  }

  public createWorkDayRepository(): WorkDayRepository {
    throw new Error(
      "NotionWorkDayRepository not implemented yet.",
    );
  }

  public createAreaRepository(): AreaRepository {
    throw new Error(
      "NotionAreaRepository not implemented yet.",
    );
  }

  public createProjectRepository(): ProjectRepository {
    throw new Error(
      "NotionProjectRepository not implemented yet.",
    );
  }

  public createSiteRepository(): SiteRepository {
    throw new Error(
      "NotionSiteRepository not implemented yet.",
    );
  }

  public createContractorRepository(): ContractorRepository {
    throw new Error(
      "NotionContractorRepository not implemented yet.",
    );
  }
}

export function createRepositoryFactory(
  configuration: EnvironmentConfiguration,
): RepositoryFactory {
  if (
    configuration.repositoryProvider ===
    "memory"
  ) {
    return new InMemoryRepositoryFactory();
  }

  return new NotionRepositoryFactory(
    configuration,
  );
}
