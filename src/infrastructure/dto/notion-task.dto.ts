import type { TaskStatus }
  from "../../domains/tasks/models/task-status";

export interface NotionTaskDto {
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
