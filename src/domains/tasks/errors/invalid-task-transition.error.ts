import type { TaskStatus } from "../models/task-status";

export class InvalidTaskTransitionError extends Error {
  constructor(
    currentStatus: TaskStatus,
    targetStatus: TaskStatus,
  ) {
    super(
      `Invalid task transition from '${currentStatus}' to '${targetStatus}'`,
    );

    this.name = "InvalidTaskTransitionError";
  }
}