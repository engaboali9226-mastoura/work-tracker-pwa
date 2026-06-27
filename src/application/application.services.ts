import type {
  TaskApplicationService,
} from "./tasks";

import type {
  WorkDayApplicationService,
} from "./work-days";

export interface ApplicationServices {

  taskApplicationService:
    TaskApplicationService;

  workDayApplicationService:
    WorkDayApplicationService;

}
