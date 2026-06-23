import type { Task } from "../models/task.model";

export interface TaskRepository {
  findByKey(
    taskKey: string,
  ): Promise<Task | null>;

  save(
    task: Task,
  ): Promise<void>;
}