export interface CreateTaskCommand {
  taskKey: string;

  workDayKey: string;

  title: string;

  categoryId: string;

  subCategoryId: string;

  areaId?: string;

  siteId?: string;

  projectId?: string;

  contractorId?: string;

  startTime: string;
}
