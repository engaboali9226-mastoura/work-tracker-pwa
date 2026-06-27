import type {
  WorkDayCreationService,
} from "../../domains/work-days/services/work-day-creation.service";

import type {
  WorkDayLifecycleService,
} from "../../domains/work-days/services/work-day-lifecycle.service";

import type {
  WorkDayQueryService,
} from "../../domains/work-days/services/work-day-query.service";

export interface WorkDayApplicationDependencies {

  workDayCreationService:
    WorkDayCreationService;

  workDayLifecycleService:
    WorkDayLifecycleService;

  workDayQueryService:
    WorkDayQueryService;

}
