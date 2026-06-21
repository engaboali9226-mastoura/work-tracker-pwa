import type { TaskStatus } from "./task-status";

export interface Task {
  taskKey: string;

  workDayKey: string;

  title: string;

  categoryId: string;

  siteId?: string;

  projectId?: string;

  startTime: string;

  endTime?: string;

  status: TaskStatus;

}