import type { Task } from "../models/task.model";
import type { TaskStatus } from "../models/task-status";

export interface TaskQueryService {
  getTaskByKey(
    taskKey: string,
  ): Promise<Task | null>;

  getTasksByWorkDay(
    workDayKey: string,
  ): Promise<Task[]>;

  getTasksByStatus(
    status: TaskStatus,
  ): Promise<Task[]>;

  getActiveTasks(): Promise<Task[]>;
}