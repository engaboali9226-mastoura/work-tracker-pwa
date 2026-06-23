import type { Task } from "../../tasks/models/task.model";

import type { WorkDayDetails } from "../dtos/work-day-details.dto";
import type { WorkDay } from "../models/work-day.model";

import type { WorkDayQueryDependencies } from "./work-day-query.dependencies";
import type { WorkDayQueryService } from "./work-day-query.service";

export class WorkDayQueryServiceImpl
  implements WorkDayQueryService
{
  private readonly taskRepository;

  constructor(
    dependencies: WorkDayQueryDependencies,
  ) {
    this.taskRepository =
      dependencies.taskRepository;
  }

  async getWorkDay(
    dayKey: string,
  ): Promise<WorkDay | null> {
    const tasks =
      await this.taskRepository.findByWorkDay(
        dayKey,
      );

    if (tasks.length === 0) {
      return null;
    }

    return {
      dayKey,
    };
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
    const tasks =
      await this.taskRepository.findByWorkDay(
        dayKey,
      );

    if (tasks.length === 0) {
      return null;
    }

    return {
      workDay: {
        dayKey,
      },
      tasks,
    };
  }

  async getWorkDays(
    startDayKey: string,
    endDayKey: string,
  ): Promise<WorkDay[]> {
    const tasks =
      await this.taskRepository.findAll();

    const dayKeys = [
      ...new Set(
        tasks
          .map((task) => task.workDayKey)
          .filter(
            (dayKey) =>
              dayKey >= startDayKey &&
              dayKey <= endDayKey,
          ),
      ),
    ];

    return dayKeys.map(
      (dayKey): WorkDay => ({
        dayKey,
      }),
    );
  }
}
