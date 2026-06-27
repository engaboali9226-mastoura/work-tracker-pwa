import type { Task }
  from "../../domains/tasks/models/task.model";

import type {
  CreateTaskCommand,
} from "../../domains/tasks/services/task-creation.commands";

import type {
  CompleteTaskCommand,
} from "../../domains/tasks/services/task-lifecycle.commands";

export interface TaskApplicationService {

  createTask(
    command: CreateTaskCommand,
  ): Promise<Task>;

  completeTask(
    command: CompleteTaskCommand,
  ): Promise<Task>;

  getTask(
    taskKey: string,
  ): Promise<Task | null>;

  getTasksForWorkDay(
    workDayKey: string,
  ): Promise<Task[]>;

  getActiveTasks(): Promise<Task[]>;
}
