import type { Task }
  from "../../domains/tasks/models/task.model";

import type {
  WorkDayDetails,
} from "../../domains/work-days/dtos/work-day-details.dto";

import type {
  WorkDay,
} from "../../domains/work-days/models/work-day.model";

import type {
  CreateWorkDayCommand,
} from "../../domains/work-days/services/work-day-creation.commands";

import type {
  CompleteWorkDayCommand,
} from "../../domains/work-days/services/work-day-lifecycle.commands";

export interface WorkDayApplicationService {

  createWorkDay(
    command: CreateWorkDayCommand,
  ): Promise<WorkDay>;

  completeWorkDay(
    command: CompleteWorkDayCommand,
  ): Promise<WorkDay>;

  getWorkDay(
    workDayKey: string,
  ): Promise<WorkDay | null>;

  getWorkDayTasks(
    workDayKey: string,
  ): Promise<Task[]>;

  getWorkDayDetails(
    workDayKey: string,
  ): Promise<WorkDayDetails | null>;

  getWorkDays(
    startDayKey: string,
    endDayKey: string,
  ): Promise<WorkDay[]>;

}
