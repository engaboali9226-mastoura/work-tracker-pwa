import type { TaskStatus } from "./task-status";

export interface Task {
  taskKey: string;

  workDayKey: string;

  title: string;

  categoryId: string;

  subCategoryId: string;

  areaId: string;

  siteId: string;

  projectId: string;

  contractorId: string;

  startTime: string;

  endTime?: string;

  status: TaskStatus;
}
