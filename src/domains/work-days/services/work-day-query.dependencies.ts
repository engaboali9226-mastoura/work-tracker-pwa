import type { TaskRepository } from "../../tasks/repositories/task.repository";

export interface WorkDayQueryDependencies {
  taskRepository: TaskRepository;
}