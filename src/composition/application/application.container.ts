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

  public readonly taskApplicationService;

  public readonly workDayApplicationService;

  constructor() {

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
