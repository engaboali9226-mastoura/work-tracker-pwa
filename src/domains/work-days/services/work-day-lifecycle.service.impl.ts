import type { EventLog }
  from "../../event-log/models/event.model";

import type { Task }
  from "../../tasks/models/task.model";

import type { WorkDay }
  from "../models/work-day.model";

import { WorkDayNotFoundError }
  from "../errors/work-day-not-found.error";

import type {
  CompleteWorkDayCommand,
} from "./work-day-lifecycle.commands";

import type {
  WorkDayLifecycleDependencies,
} from "./work-day-lifecycle.dependencies";

import type {
  WorkDayLifecycleService,
} from "./work-day-lifecycle.service";

export class WorkDayLifecycleServiceImpl
  implements WorkDayLifecycleService
{
  private readonly dependencies:
    WorkDayLifecycleDependencies;

  constructor(
    dependencies: WorkDayLifecycleDependencies,
  ) {
    this.dependencies = dependencies;
  }

  async completeWorkDay(
    command: CompleteWorkDayCommand,
  ): Promise<WorkDay> {

    const workDay =
      await this.dependencies
        .workDayRepository
        .findByKey(
          command.dayKey,
        );

    if (!workDay) {
      throw new WorkDayNotFoundError(
        command.dayKey,
      );
    }

    const tasks =
      await this.dependencies
        .taskRepository
        .findByWorkDay(
          command.dayKey,
        );

    const activeTasks =
      tasks.filter(
        (task) =>
          task.status === "active",
      );

    for (const task of activeTasks) {
      task.status = "paused";

      await this.dependencies
        .taskRepository
        .save(task);

      await this.createTaskPausedEvent(
        task,
        command.endedAt,
      );
    }

    workDay.status =
      "completed";

    workDay.endedAt =
      command.endedAt;

    await this.dependencies
      .workDayRepository
      .save(workDay);

    await this.createWorkDayCompletedEvent(
      workDay,
      command.endedAt,
    );

    return workDay;
  }

  private async createTaskPausedEvent(
    task: Task,
    timestamp: string,
  ): Promise<void> {

    const event: EventLog = {
      eventId:
        crypto.randomUUID(),

      eventType:
        "task-paused",

      entityType:
        "task",

      entityId:
        task.taskKey,

      occurredAt:
        timestamp,

      description:
        "End Of Work Day",
    };

    await this.dependencies
      .eventRepository
      .save(event);
  }

  private async createWorkDayCompletedEvent(
    workDay: WorkDay,
    timestamp: string,
  ): Promise<void> {

    const event: EventLog = {
      eventId:
        crypto.randomUUID(),

      eventType:
        "work-day-completed",

      entityType:
        "work-day",

      entityId:
        workDay.dayKey,

      occurredAt:
        timestamp,
    };

    await this.dependencies
      .eventRepository
      .save(event);
  }
}
