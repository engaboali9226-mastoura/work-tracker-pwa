import {
  TaskCreationServiceImpl,
} from "../domains/tasks/services/task-creation.service.impl";

import {
  TaskLifecycleServiceImpl,
} from "../domains/tasks/services/task-lifecycle.service.impl";

import {
  TaskQueryServiceImpl,
} from "../domains/tasks/services/task-query.service.impl";

import {
  WorkDayCreationServiceImpl,
} from "../domains/work-days/services/work-day-creation.service.impl";

import {
  WorkDayQueryServiceImpl,
} from "../domains/work-days/services/work-day-query.service.impl";

import {
  AreaQueryServiceImpl,
} from "../domains/areas/services/area-query.service.impl";

import {
  ProjectQueryServiceImpl,
} from "../domains/projects/services/project-query.service.impl";

import {
  SiteQueryServiceImpl,
} from "../domains/sites/services/site-query.service.impl";

import {
  ContractorQueryServiceImpl,
} from "../domains/contractors/services/contractor-query.service.impl";

import {
  createNotionConfiguration,
} from "../infrastructure/configuration/notion.configuration";

import {
  createRepositoryFactory,
} from "./repository.factory";

export class ApplicationContainer {
  public readonly taskRepository;

  public readonly eventRepository;

  public readonly workDayRepository;

  public readonly areaRepository;

  public readonly projectRepository;

  public readonly siteRepository;

  public readonly contractorRepository;

  public readonly taskCreationService;

  public readonly taskLifecycleService;

  public readonly taskQueryService;

  public readonly workDayCreationService;

  public readonly workDayQueryService;

  public readonly areaQueryService;

  public readonly projectQueryService;

  public readonly siteQueryService;

  public readonly contractorQueryService;

  constructor() {
    const configuration =
      createNotionConfiguration();

    const repositoryFactory =
      createRepositoryFactory(
        configuration,
      );

    this.taskRepository =
      repositoryFactory.createTaskRepository();

    this.eventRepository =
      repositoryFactory.createEventRepository();

    this.workDayRepository =
      repositoryFactory.createWorkDayRepository();

    this.areaRepository =
      repositoryFactory.createAreaRepository();

    this.projectRepository =
      repositoryFactory.createProjectRepository();

    this.siteRepository =
      repositoryFactory.createSiteRepository();

    this.contractorRepository =
      repositoryFactory.createContractorRepository();

    this.taskCreationService =
      new TaskCreationServiceImpl({
        taskRepository:
          this.taskRepository,

        eventRepository:
          this.eventRepository,
      });

    this.workDayCreationService =
      new WorkDayCreationServiceImpl({
        workDayRepository:
          this.workDayRepository,

        eventRepository:
          this.eventRepository,
      });

    this.taskLifecycleService =
      new TaskLifecycleServiceImpl({
        taskRepository:
          this.taskRepository,

        eventRepository:
          this.eventRepository,
      });

    this.taskQueryService =
      new TaskQueryServiceImpl({
        taskRepository:
          this.taskRepository,
      });

    this.workDayQueryService =
      new WorkDayQueryServiceImpl({
        taskRepository:
          this.taskRepository,

        workDayRepository:
          this.workDayRepository,
      });

    this.areaQueryService =
      new AreaQueryServiceImpl({
        areaRepository:
          this.areaRepository,
      });

    this.projectQueryService =
      new ProjectQueryServiceImpl({
        projectRepository:
          this.projectRepository,
      });

    this.siteQueryService =
      new SiteQueryServiceImpl({
        siteRepository:
          this.siteRepository,
      });

    this.contractorQueryService =
      new ContractorQueryServiceImpl({
        contractorRepository:
          this.contractorRepository,
      });
  }
}

export const applicationContainer =
  new ApplicationContainer();
