import type { Task } from "../../tasks/models/task.model";

import type { WorkDayDetails } from "../dtos/work-day-details.dto";
import type { WorkDay } from "../models/work-day.model";

export interface WorkDayQueryService {
  getWorkDay(
    dayKey: string,
  ): Promise<WorkDay | null>;

  getWorkDayTasks(
    dayKey: string,
  ): Promise<Task[]>;

  getWorkDayDetails(
    dayKey: string,
  ): Promise<WorkDayDetails | null>;

  getWorkDays(
    startDayKey: string,
    endDayKey: string,
  ): Promise<WorkDay[]>;
}
