import type { Task }
  from "../../domains/tasks/models/task.model";

import type {
  NotionTaskPageDto,
} from "../dto/notion-task-page.dto";

export class NotionTaskPageMapper {
  public static toPageDto(
    task: Task,
  ): NotionTaskPageDto {
    return {
      "Task Key": task.taskKey,

      "Work Day Key":
        task.workDayKey,

      Title: task.title,

      "Category Id":
        task.categoryId,

      "Sub Category Id":
        task.subCategoryId,

      "Area Id":
        task.areaId,

      "Site Id":
        task.siteId,

      "Project Id":
        task.projectId,

      "Contractor Id":
        task.contractorId,

      "Start Time":
        task.startTime,

      "End Time":
        task.endTime,

      Status: task.status,
    };
  }

  public static toDomain(
    dto: NotionTaskPageDto,
  ): Task {
    return {
      taskKey:
        dto["Task Key"],

      workDayKey:
        dto["Work Day Key"],

      title:
        dto.Title,

      categoryId:
        dto["Category Id"],

      subCategoryId:
        dto["Sub Category Id"],

      areaId:
        dto["Area Id"],

      siteId:
        dto["Site Id"],

      projectId:
        dto["Project Id"],

      contractorId:
        dto["Contractor Id"],

      startTime:
        dto["Start Time"],

      endTime:
        dto["End Time"],

      status:
        dto.Status,
    };
  }
}
