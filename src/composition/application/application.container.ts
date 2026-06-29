import {
  LookupApplicationServiceImpl,
} from "../../application/lookups";

import {
  TaskApplicationServiceImpl,
} from "../../application/tasks";

import {
  WorkDayApplicationServiceImpl,
} from "../../application/work-days";

import {
  domainContainer,
} from "../domains/domain.container";

export class ApplicationContainer {

  public readonly lookupApplicationService;

  public readonly taskApplicationService;

  public readonly workDayApplicationService;

  constructor() {

    this.lookupApplicationService =
      new LookupApplicationServiceImpl({

        areaQueryService:
          domainContainer.areaQueryService,

        siteQueryService:
          domainContainer.siteQueryService,

        projectQueryService:
          domainContainer.projectQueryService,

        contractorQueryService:
          domainContainer.contractorQueryService,

      });

    this.taskApplicationService =
      new TaskApplicationServiceImpl({

        taskCreationService:
          domainContainer.taskCreationService,

        taskLifecycleService:
          domainContainer.taskLifecycleService,

        taskQueryService:
          domainContainer.taskQueryService,

      });

    this.workDayApplicationService =
      new WorkDayApplicationServiceImpl({

        workDayCreationService:
          domainContainer.workDayCreationService,

        workDayLifecycleService:
          domainContainer.workDayLifecycleService,

        workDayQueryService:
          domainContainer.workDayQueryService,

      });

  }

}

export const applicationContainer =
  new ApplicationContainer();
