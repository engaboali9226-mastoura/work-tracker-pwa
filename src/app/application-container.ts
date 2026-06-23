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
  WorkDayQueryServiceImpl,
} from "../domains/work-days/services/work-day-query.service.impl";

import {
  InMemoryTaskRepository,
} from "../infrastructure/repositories/in-memory-task.repository";

import {
  InMemoryEventRepository,
} from "../infrastructure/repositories/in-memory-event.repository";

export class ApplicationContainer {
  public readonly taskRepository;

  public readonly eventRepository;

  public readonly taskCreationService;

  public readonly taskLifecycleService;

  public readonly taskQueryService;

  public readonly workDayQueryService;

  constructor() {
    this.taskRepository =
      new InMemoryTaskRepository();

    this.eventRepository =
      new InMemoryEventRepository();

    this.taskCreationService =
      new TaskCreationServiceImpl({
        taskRepository:
          this.taskRepository,

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
      });
  }
}

export const applicationContainer =
  new ApplicationContainer();
