import type { TaskStatus }
  from "../../domains/tasks/models/task-status";

export interface NotionTaskPageDto {
  "Task Key": string;

  "Work Day Key": string;

  Title: string;

  "Category Id": string;

  "Sub Category Id": string;

  "Area Id": string;

  "Site Id": string;

  "Project Id": string;

  "Contractor Id": string;

  "Start Time": string;

  "End Time"?: string;

  Status: TaskStatus;
}
