import {
  domainContainer,
} from "../domains/domain.container";

import {
  repositoryContainer,
} from "../repositories/repository.container";


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

  public readonly areaQueryService;

  public readonly siteQueryService;

  public readonly projectQueryService;

  public readonly contractorQueryService;

  public readonly taskCategoryQueryService;

  public readonly subCategoryQueryService;

  public readonly productionRecordCreationService;

  public readonly productionRecordQueryService;

  constructor() {
    this.taskRepository =
      repositoryContainer.taskRepository;

    this.eventRepository =
      repositoryContainer.eventRepository;

    this.workDayRepository =
      repositoryContainer.workDayRepository;

    this.areaRepository =
      repositoryContainer.areaRepository;

    this.siteRepository =
      repositoryContainer.siteRepository;

    this.projectRepository =
      repositoryContainer.projectRepository;

    this.contractorRepository =
      repositoryContainer.contractorRepository;

    this.taskCategoryRepository =
      repositoryContainer.taskCategoryRepository;

    this.subCategoryRepository =
      repositoryContainer.subCategoryRepository;

    this.productionRecordRepository =
      repositoryContainer.productionRecordRepository;

    this.taskCreationService =
      domainContainer.taskCreationService;

    this.workDayCreationService =
      domainContainer.workDayCreationService;

    this.taskLifecycleService =
      domainContainer.taskLifecycleService;

    this.taskQueryService =
      domainContainer.taskQueryService;

    this.workDayQueryService =
      domainContainer.workDayQueryService;

    this.areaQueryService =
      domainContainer.areaQueryService;

    this.siteQueryService =
      domainContainer.siteQueryService;

    this.projectQueryService =
      domainContainer.projectQueryService;

    this.contractorQueryService =
      domainContainer.contractorQueryService;

    this.taskCategoryQueryService =
      domainContainer.taskCategoryQueryService;

    this.subCategoryQueryService =
      domainContainer.subCategoryQueryService;

    this.productionRecordCreationService =
      domainContainer.productionRecordCreationService;

    this.productionRecordQueryService =
      domainContainer.productionRecordQueryService;
  }
}

export const applicationContainer =
  new ApplicationContainer();
