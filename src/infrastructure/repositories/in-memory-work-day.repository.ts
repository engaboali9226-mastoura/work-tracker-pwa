import type { WorkDay } from "../../domains/work-days/models/work-day.model";
import type { WorkDayRepository } from "../../domains/work-days/repositories/work-day.repository";

export class InMemoryWorkDayRepository
  implements WorkDayRepository
{
  private readonly workDays =
    new Map<string, WorkDay>();

  public async findByKey(
    dayKey: string,
  ): Promise<WorkDay | null> {
    return this.workDays.get(dayKey) ?? null;
  }

  public async findInProgressWorkDay(
  ): Promise<WorkDay | null> {
    return (
      [...this.workDays.values()].find(
        (workDay) =>
          workDay.status === "in-progress",
      ) ?? null
    );
  }

  public async findAll(
  ): Promise<WorkDay[]> {
    return [...this.workDays.values()];
  }

  public async save(
    workDay: WorkDay,
  ): Promise<void> {
    this.workDays.set(
      workDay.dayKey,
      workDay,
    );
  }
}
