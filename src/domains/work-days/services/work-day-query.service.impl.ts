import type { Task } from "../../tasks/models/task.model";

import type { WorkDayDetails } from "../dtos/work-day-details.dto";
import type { WorkDay } from "../models/work-day.model";

import type { WorkDayQueryDependencies } from "./work-day-query.dependencies";
import type { WorkDayQueryService } from "./work-day-query.service";

export class WorkDayQueryServiceImpl
  implements WorkDayQueryService
{
  private readonly taskRepository;

  private readonly workDayRepository;

  constructor(
    dependencies: WorkDayQueryDependencies,
  ) {
    this.taskRepository =
      dependencies.taskRepository;

    this.workDayRepository =
      dependencies.workDayRepository;
  }

  async getWorkDay(
    dayKey: string,
  ): Promise<WorkDay | null> {
    return this.workDayRepository.findByKey(
      dayKey,
    );
  }

  async getWorkDayTasks(
    dayKey: string,
  ): Promise<Task[]> {
    return this.taskRepository.findByWorkDay(
      dayKey,
    );
  }

  async getWorkDayDetails(
    dayKey: string,
  ): Promise<WorkDayDetails | null> {
    const workDay =
      await this.workDayRepository.findByKey(
        dayKey,
      );

    if (!workDay) {
      return null;
    }

    const tasks =
      await this.taskRepository.findByWorkDay(
        dayKey,
      );

    return {
      workDay,
      tasks,
    };
  }

  async getWorkDays(
    startDayKey: string,
    endDayKey: string,
  ): Promise<WorkDay[]> {
    const workDays =
      await this.workDayRepository.findAll();

    return workDays.filter(
      (workDay) =>
        workDay.dayKey >= startDayKey &&
        workDay.dayKey <= endDayKey,
    );
  }
}
