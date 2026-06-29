import {
  repositoryContainer,
} from "../repositories/repository.container";

import {
  AreaQueryServiceImpl,
} from "../../domains/areas/services/area-query.service.impl";

import {
  ContractorQueryServiceImpl,
} from "../../domains/contractors/services/contractor-query.service.impl";

import {
  ProductionRecordCreationServiceImpl,
} from "../../domains/production-records/services/production-record-creation.service.impl";

import {
  ProductionRecordQueryServiceImpl,
} from "../../domains/production-records/services/production-record-query.service.impl";

import {
  ProjectQueryServiceImpl,
} from "../../domains/projects/services/project-query.service.impl";

import {
  SiteQueryServiceImpl,
} from "../../domains/sites/services/site-query.service.impl";

import {
  SubCategoryQueryServiceImpl,
} from "../../domains/sub-categories/services/sub-category-query.service.impl";

import {
  TaskCategoryQueryServiceImpl,
} from "../../domains/task-categories/services/task-category-query.service.impl";

import {
  TaskCreationServiceImpl,
} from "../../domains/tasks/services/task-creation.service.impl";

import {
  TaskLifecycleServiceImpl,
} from "../../domains/tasks/services/task-lifecycle.service.impl";

import {
  TaskQueryServiceImpl,
} from "../../domains/tasks/services/task-query.service.impl";

import {
  WorkDayCreationServiceImpl,
} from "../../domains/work-days/services/work-day-creation.service.impl";

import {
  WorkDayLifecycleServiceImpl,
} from "../../domains/work-days/services/work-day-lifecycle.service.impl";

import {
  WorkDayQueryServiceImpl,
} from "../../domains/work-days/services/work-day-query.service.impl";

export class DomainContainer {

  public readonly taskCreationService;

  public readonly taskLifecycleService;

  public readonly taskQueryService;

  public readonly workDayCreationService;

  public readonly workDayLifecycleService;

  public readonly workDayQueryService;

  public readonly areaQueryService;

  public readonly siteQueryService;

  public readonly projectQueryService;

  public readonly contractorQueryService;

  public readonly taskCategoryQueryService;

  public readonly subCategoryQueryService;

  public readonly productionRecordCreationService;

  public readonly productionRecordQueryService;

  constructor() {

    this.taskCreationService =
      new TaskCreationServiceImpl({
        taskRepository:
          repositoryContainer.taskRepository,

        workDayRepository:
          repositoryContainer.workDayRepository,

        eventRepository:
          repositoryContainer.eventRepository,

        taskCategoryRepository:
          repositoryContainer.taskCategoryRepository,

        subCategoryRepository:
          repositoryContainer.subCategoryRepository,});

    this.workDayCreationService =
      new WorkDayCreationServiceImpl({
        workDayRepository:
          repositoryContainer.workDayRepository,

        eventRepository:
          repositoryContainer.eventRepository,
      });

    this.workDayLifecycleService =
      new WorkDayLifecycleServiceImpl({
        workDayRepository:
          repositoryContainer.workDayRepository,

        taskRepository:
          repositoryContainer.taskRepository,

        eventRepository:
          repositoryContainer.eventRepository,
      });

    this.taskLifecycleService =
      new TaskLifecycleServiceImpl({
        taskRepository:
          repositoryContainer.taskRepository,

        eventRepository:
          repositoryContainer.eventRepository,
      });

    this.taskQueryService =
      new TaskQueryServiceImpl({
        taskRepository:
          repositoryContainer.taskRepository,
      });

    this.workDayQueryService =
      new WorkDayQueryServiceImpl({
        taskRepository:
          repositoryContainer.taskRepository,

        workDayRepository:
          repositoryContainer.workDayRepository,
      });

        this.areaQueryService =
      new AreaQueryServiceImpl({
        areaRepository:
          repositoryContainer.areaRepository,
      });

    this.siteQueryService =
      new SiteQueryServiceImpl({
        siteRepository:
          repositoryContainer.siteRepository,
      });

    this.projectQueryService =
      new ProjectQueryServiceImpl({
        projectRepository:
          repositoryContainer.projectRepository,
      });

    this.contractorQueryService =
      new ContractorQueryServiceImpl({
        contractorRepository:
          repositoryContainer.contractorRepository,
      });

    this.taskCategoryQueryService =
      new TaskCategoryQueryServiceImpl({
        taskCategoryRepository:
          repositoryContainer.taskCategoryRepository,
      });

    this.subCategoryQueryService =
      new SubCategoryQueryServiceImpl({
        subCategoryRepository:
          repositoryContainer.subCategoryRepository,
      });

    this.productionRecordCreationService =
      new ProductionRecordCreationServiceImpl({
        taskRepository:
          repositoryContainer.taskRepository,

        productionRecordRepository:
          repositoryContainer.productionRecordRepository,
      });

    this.productionRecordQueryService =
      new ProductionRecordQueryServiceImpl({
        productionRecordRepository:
          repositoryContainer.productionRecordRepository,
      });

  }

}

export const domainContainer =
  new DomainContainer();
