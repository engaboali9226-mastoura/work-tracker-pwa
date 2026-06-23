import type { TaskStatus } from "../models/task-status";

export const TASK_TRANSITIONS: Record<
  TaskStatus,
  TaskStatus[]
> = {
  active: [
    "paused",
    "completed",
    "cancelled",
  ],

  paused: [
    "active",
    "completed",
    "cancelled",
  ],

  completed: [],

  cancelled: [],
};