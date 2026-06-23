import type { Task } from "../../domains/tasks/models/task.model";

import type { NotionTaskPageDto } from "../dto/notion-task-page.dto";

export class NotionTaskPageMapper {
  public static toPageDto(
    task: Task,
  ): NotionTaskPageDto {
    return {
      "Task Key": task.taskKey,

      "Work Day Key": task.workDayKey,

      Title: task.title,

      "Category Id": task.categoryId,

      "Site Id": task.siteId,

      "Project Id": task.projectId,

      "Start Time": task.startTime,

      "End Time": task.endTime,

      Status: task.status,
    };
  }

  public static toDomain(
    dto: NotionTaskPageDto,
  ): Task {
    return {
      taskKey: dto["Task Key"],

      workDayKey: dto["Work Day Key"],

      title: dto.Title,

      categoryId: dto["Category Id"],

      siteId: dto["Site Id"],

      projectId: dto["Project Id"],

      startTime: dto["Start Time"],

      endTime: dto["End Time"],

      status: dto.Status,
    };
  }
}
