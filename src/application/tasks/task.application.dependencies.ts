import type {
  TaskCreationService,
} from "../../domains/tasks/services/task-creation.service";

import type {
  TaskLifecycleService,
} from "../../domains/tasks/services/task-lifecycle.service";

import type {
  TaskQueryService,
} from "../../domains/tasks/services/task-query.service";

export interface TaskApplicationDependencies {

  taskCreationService:
    TaskCreationService;

  taskLifecycleService:
    TaskLifecycleService;

  taskQueryService:
    TaskQueryService;

}
