import type { Task } from "../models/task.model";
import type { TaskStatus } from "../models/task-status";

export interface TaskRepository {
  findByKey(
    taskKey: string,
  ): Promise<Task | null>;

  findByWorkDay(
    workDayKey: string,
  ): Promise<Task[]>;

  findByStatus(
    status: TaskStatus,
  ): Promise<Task[]>;

  findActiveTasks(): Promise<Task[]>;

  findAll(): Promise<Task[]>;

  save(
    task: Task,
  ): Promise<void>;
}