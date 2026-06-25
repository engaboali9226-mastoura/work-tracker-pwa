import type { TaskRepository } from "../../tasks/repositories/task.repository";
import type { WorkDayRepository } from "../repositories/work-day.repository";

export interface WorkDayQueryDependencies {
  taskRepository: TaskRepository;

  workDayRepository: WorkDayRepository;
}
