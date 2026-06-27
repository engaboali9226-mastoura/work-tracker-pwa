import {
  createNotionConfiguration,
} from "../../infrastructure/configuration/notion.configuration";

import {
  createRepositoryFactory,
} from "../repository.factory";

export class RepositoryContainer {

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

  }

}

export const repositoryContainer =
  new RepositoryContainer();
