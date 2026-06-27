import type { Task }
  from "../../domains/tasks/models/task.model";

import type {
  CreateTaskCommand,
} from "../../domains/tasks/services/task-creation.commands";

import type {
  CompleteTaskCommand,
} from "../../domains/tasks/services/task-lifecycle.commands";

import type {
  TaskApplicationDependencies,
} from "./task.application.dependencies";

import type {
  TaskApplicationService,
} from "./task.application.service";

export class TaskApplicationServiceImpl
  implements TaskApplicationService
{
  private readonly dependencies:
    TaskApplicationDependencies;

  constructor(
    dependencies: TaskApplicationDependencies,
  ) {
    this.dependencies =
      dependencies;
  }

  async createTask(
    command: CreateTaskCommand,
  ): Promise<Task> {
    return this.dependencies
      .taskCreationService
      .createTask(command);
  }

  async completeTask(
    command: CompleteTaskCommand,
  ): Promise<Task> {
    return this.dependencies
      .taskLifecycleService
      .completeTask(command);
  }

  async getTask(
    taskKey: string,
  ): Promise<Task | null> {
    return this.dependencies
      .taskQueryService
      .getTaskByKey(taskKey);
  }

  async getTasksForWorkDay(
    workDayKey: string,
  ): Promise<Task[]> {
    return this.dependencies
      .taskQueryService
      .getTasksByWorkDay(workDayKey);
  }

  async getActiveTasks(): Promise<Task[]> {
    return this.dependencies
      .taskQueryService
      .getActiveTasks();
  }
}
