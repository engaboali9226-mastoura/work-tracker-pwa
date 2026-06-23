import type { TaskRepository } from "../repositories/task.repository";

export interface TaskQueryDependencies {
  taskRepository: TaskRepository;
}