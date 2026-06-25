import type { WorkDay } from "../models/work-day.model";

export interface WorkDayRepository {
  findByKey(
    dayKey: string,
  ): Promise<WorkDay | null>;

  findInProgressWorkDay(): Promise<WorkDay | null>;

  findAll(): Promise<WorkDay[]>;

  save(
    workDay: WorkDay,
  ): Promise<void>;
}
