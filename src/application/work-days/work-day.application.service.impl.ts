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

import type {
  WorkDayApplicationDependencies,
} from "./work-day.application.dependencies";

import type {
  WorkDayApplicationService,
} from "./work-day.application.service";

export class WorkDayApplicationServiceImpl
  implements WorkDayApplicationService
{
  private readonly dependencies:
    WorkDayApplicationDependencies;

  constructor(
    dependencies: WorkDayApplicationDependencies,
  ) {
    this.dependencies =
      dependencies;
  }

  async createWorkDay(
    command: CreateWorkDayCommand,
  ): Promise<WorkDay> {
    return this.dependencies
      .workDayCreationService
      .createWorkDay(command);
  }

  async completeWorkDay(
    command: CompleteWorkDayCommand,
  ): Promise<WorkDay> {
    return this.dependencies
      .workDayLifecycleService
      .completeWorkDay(command);
  }

  async getWorkDay(
    workDayKey: string,
  ): Promise<WorkDay | null> {
    return this.dependencies
      .workDayQueryService
      .getWorkDay(workDayKey);
  }

  async getWorkDayTasks(
    workDayKey: string,
  ): Promise<Task[]> {
    return this.dependencies
      .workDayQueryService
      .getWorkDayTasks(workDayKey);
  }

  async getWorkDayDetails(
    workDayKey: string,
  ): Promise<WorkDayDetails | null> {
    return this.dependencies
      .workDayQueryService
      .getWorkDayDetails(workDayKey);
  }

  async getWorkDays(
    startDayKey: string,
    endDayKey: string,
  ): Promise<WorkDay[]> {
    return this.dependencies
      .workDayQueryService
      .getWorkDays(
        startDayKey,
        endDayKey,
      );
  }
}
