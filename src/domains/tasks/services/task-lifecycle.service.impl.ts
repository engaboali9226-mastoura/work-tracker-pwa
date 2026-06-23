
import type { EventLog } from "../../event-log/models/event.model";

import { TaskNotFoundError } from "../errors/task-not-found.error";
import { InvalidTaskTransitionError } from "../errors/invalid-task-transition.error";

import type { Task } from "../models/task.model";
import type { TaskStatus } from "../models/task-status";

import type {
  PauseTaskCommand,
  ResumeTaskCommand,
  CompleteTaskCommand,
  CancelTaskCommand,
} from "./task-lifecycle.commands";

import type { TaskLifecycleDependencies } from "./task-lifecycle.dependencies";

import { TASK_TRANSITIONS } from "./task-transition-rules";

import type { TaskLifecycleService } from "./task-lifecycle.service";

export class TaskLifecycleServiceImpl
  implements TaskLifecycleService
{
  private readonly dependencies: TaskLifecycleDependencies;

  constructor(
    dependencies: TaskLifecycleDependencies,
  ) {
    this.dependencies = dependencies;
  }

  async pauseTask(
    command: PauseTaskCommand,
  ): Promise<Task> {
    const task = await this.loadTask(
      command.taskKey,
    );

    this.validateTransition(
      task.status,
      "paused",
    );

    task.status = "paused";

    await this.dependencies.taskRepository.save(
      task,
    );

    await this.createEvent(
      "task-paused",
      task.taskKey,
      command.timestamp,
      command.reason,
    );

    return task;
  }

  async resumeTask(
    command: ResumeTaskCommand,
  ): Promise<Task> {
    const task = await this.loadTask(
      command.taskKey,
    );

    this.validateTransition(
      task.status,
      "active",
    );

    task.status = "active";

    await this.dependencies.taskRepository.save(
      task,
    );

    await this.createEvent(
      "task-resumed",
      task.taskKey,
      command.timestamp,
      command.reason,
    );

    return task;
  }

  async completeTask(
    command: CompleteTaskCommand,
  ): Promise<Task> {
    const task = await this.loadTask(
      command.taskKey,
    );

    this.validateTransition(
      task.status,
      "completed",
    );

    task.status = "completed";

    task.endTime = command.timestamp;

    await this.dependencies.taskRepository.save(
      task,
    );

    await this.createEvent(
      "task-completed",
      task.taskKey,
      command.timestamp,
    );

    return task;
  }

  async cancelTask(
    command: CancelTaskCommand,
  ): Promise<Task> {
    const task = await this.loadTask(
      command.taskKey,
    );

    this.validateTransition(
      task.status,
      "cancelled",
    );

    task.status = "cancelled";

    task.endTime = command.timestamp;

    await this.dependencies.taskRepository.save(
      task,
    );

    await this.createEvent(
      "task-cancelled",
      task.taskKey,
      command.timestamp,
      command.reason,
    );

    return task;
  }

  private async loadTask(
    taskKey: string,
  ): Promise<Task> {
    const task =
      await this.dependencies.taskRepository.findByKey(
        taskKey,
      );

    if (!task) {
      throw new TaskNotFoundError(
        taskKey,
      );
    }

    return task;
  }

  private validateTransition(
    currentStatus: TaskStatus,
    targetStatus: TaskStatus,
  ): void {
    const allowedTransitions =
      TASK_TRANSITIONS[currentStatus];

    if (
      !allowedTransitions.includes(
        targetStatus,
      )
    ) {
      throw new InvalidTaskTransitionError(
        currentStatus,
        targetStatus,
      );
    }
  }

  private async createEvent(
    eventType: EventLog["eventType"],
    taskKey: string,
    timestamp: string,
    description?: string,
  ): Promise<void> {
    const event: EventLog = {
      eventId: crypto.randomUUID(),

      eventType,

      entityType: "task",

      entityId: taskKey,

      occurredAt: timestamp,

      description,
    };

    await this.dependencies.eventRepository.save(
      event,
    );
  }
}

