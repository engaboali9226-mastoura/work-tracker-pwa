export interface NotionTaskDto {
  taskKey: string;

  workDayKey: string;

  title: string;

  categoryId: string;

  siteId?: string;

  projectId?: string;

  startTime: string;

  endTime?: string;

  status: string;
}
