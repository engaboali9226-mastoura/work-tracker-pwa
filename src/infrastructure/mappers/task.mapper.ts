import type { Task }
  from "../../domains/tasks/models/task.model";

import type {
  NotionTaskDto,
} from "../notion/dto/notion-task.dto";

export class TaskMapper {
  public static toDomain(
    dto: NotionTaskDto,
  ): Task {
    return {
      taskKey: dto.taskKey,

      workDayKey: dto.workDayKey,

      title: dto.title,

      categoryId: dto.categoryId,

      subCategoryId:
        dto.subCategoryId,

      areaId: dto.areaId,

      siteId: dto.siteId,

      projectId: dto.projectId,

      contractorId:
        dto.contractorId,

      startTime: dto.startTime,

      endTime: dto.endTime,

      status: dto.status,
    };
  }

  public static toDto(
    task: Task,
  ): NotionTaskDto {
    return {
      taskKey: task.taskKey,

      workDayKey: task.workDayKey,

      title: task.title,

      categoryId: task.categoryId,

      subCategoryId:
        task.subCategoryId,

      areaId: task.areaId,

      siteId: task.siteId,

      projectId: task.projectId,

      contractorId:
        task.contractorId,

      startTime: task.startTime,

      endTime: task.endTime,

      status: task.status,
    };
  }
}
