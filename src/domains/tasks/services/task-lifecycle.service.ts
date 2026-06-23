import type { Task } from "../models/task.model";

import type {
  PauseTaskCommand,
  ResumeTaskCommand,
  CompleteTaskCommand,
  CancelTaskCommand,
} from "./task-lifecycle.commands";

export interface TaskLifecycleService {
  pauseTask(
    command: PauseTaskCommand,
  ): Promise<Task>;

  resumeTask(
    command: ResumeTaskCommand,
  ): Promise<Task>;

  completeTask(
    command: CompleteTaskCommand,
  ): Promise<Task>;

  cancelTask(
    command: CancelTaskCommand,
  ): Promise<Task>;
}