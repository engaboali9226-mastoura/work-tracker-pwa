
import type { EventLog } from "../../event-log/models/event.model";

import type { Task } from "../models/task.model";

import type {
  CreateTaskCommand,
} from "./task-creation.commands";

import type { TaskCreationDependencies } from "./task-creation.dependencies";

import type { TaskCreationService } from "./task-creation.service";

export class TaskCreationServiceImpl
  implements TaskCreationService
{
  private readonly dependencies: TaskCreationDependencies;

  constructor(
    dependencies: TaskCreationDependencies,
  ) {
    this.dependencies = dependencies;
  }

  async createTask(
    command: CreateTaskCommand,
  ): Promise<Task> {
    const task: Task = {
      taskKey: command.taskKey,

      workDayKey: command.workDayKey,

      title: command.title,

      categoryId: command.categoryId,

      siteId: command.siteId,

      projectId: command.projectId,

      startTime: command.startTime,

      endTime: undefined,

      status: "active",
    };

    await this.dependencies.taskRepository.save(
      task,
    );

    const event: EventLog = {
      eventId: crypto.randomUUID(),

      eventType: "task-started",

      entityType: "task",

      entityId: task.taskKey,

      occurredAt: command.startTime,
    };

    await this.dependencies.eventRepository.save(
      event,
    );

    return task;
  }
}

