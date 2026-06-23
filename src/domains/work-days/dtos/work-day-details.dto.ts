import type { Task } from "../../tasks/models/task.model";
import type { WorkDay } from "../models/work-day.model";

export interface WorkDayDetails {
  workDay: WorkDay;

  tasks: Task[];
}