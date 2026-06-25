import {
  TaskCategoryQueryServiceImpl,
} from "../domains/task-categories/services/task-category-query.service.impl";

import {
  SubCategoryQueryServiceImpl,
} from "../domains/sub-categories/services/sub-category-query.service.impl";

import {
  ProductionRecordCreationServiceImpl,
} from "../domains/production-records/services/production-record-creation.service.impl";

import {
  ProductionRecordQueryServiceImpl,
} from "../domains/production-records/services/production-record-query.service.impl";

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

  public readonly siteRepository;

  public readonly projectRepository;

  public readonly contractorRepository;

  public readonly taskCategoryRepository;

  public readonly subCategoryRepository;

  public readonly productionRecordRepository;

  public readonly taskCreationService;

  public readonly taskLifecycleService;

  public readonly taskQueryService;

  public readonly workDayCreationService;

  public readonly workDayQueryService;

  public readonly taskCategoryQueryService;

  public readonly subCategoryQueryService;

  public readonly productionRecordCreationService;

  public readonly productionRecordQueryService;

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

    this.siteRepository =
      repositoryFactory.createSiteRepository();

    this.projectRepository =
      repositoryFactory.createProjectRepository();

    this.contractorRepository =
      repositoryFactory.createContractorRepository();

    this.taskCategoryRepository =
      repositoryFactory
        .createTaskCategoryRepository();

    this.subCategoryRepository =
      repositoryFactory
        .createSubCategoryRepository();

    this.productionRecordRepository =
      repositoryFactory
        .createProductionRecordRepository();

    this.taskCreationService =
      new TaskCreationServiceImpl({
        taskRepository:
          this.taskRepository,

        workDayRepository:
          this.workDayRepository,

        eventRepository:
          this.eventRepository,

        taskCategoryRepository:
          this.taskCategoryRepository,

        subCategoryRepository:
          this.subCategoryRepository,
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

    this.taskCategoryQueryService =
      new TaskCategoryQueryServiceImpl({
        taskCategoryRepository:
          this.taskCategoryRepository,
      });

    this.subCategoryQueryService =
      new SubCategoryQueryServiceImpl({
        subCategoryRepository:
          this.subCategoryRepository,
      });

    this.productionRecordCreationService =
      new ProductionRecordCreationServiceImpl({
        taskRepository:
          this.taskRepository,

        productionRecordRepository:
          this.productionRecordRepository,
      });

    this.productionRecordQueryService =
      new ProductionRecordQueryServiceImpl({
        productionRecordRepository:
          this.productionRecordRepository,
      });
  }
}

export const applicationContainer =
  new ApplicationContainer();
