import type { Task } from "../models/task.model";
import type { TaskStatus } from "../models/task-status";

import type { TaskQueryDependencies } from "./task-query.dependencies";

import type { TaskQueryService } from "./task-query.service";

export class TaskQueryServiceImpl
  implements TaskQueryService
{
  private readonly taskRepository;

  constructor(
    dependencies: TaskQueryDependencies,
  ) {
    this.taskRepository =
      dependencies.taskRepository;
  }

  async getTaskByKey(
    taskKey: string,
  ): Promise<Task | null> {
    return this.taskRepository.findByKey(
      taskKey,
    );
  }

  async getTasksByWorkDay(
    workDayKey: string,
  ): Promise<Task[]> {
    return this.taskRepository.findByWorkDay(
      workDayKey,
    );
  }

  async getTasksByStatus(
    status: TaskStatus,
  ): Promise<Task[]> {
    return this.taskRepository.findByStatus(
      status,
    );
  }

  async getActiveTasks(): Promise<Task[]> {
    return this.taskRepository.findActiveTasks();
  }
}