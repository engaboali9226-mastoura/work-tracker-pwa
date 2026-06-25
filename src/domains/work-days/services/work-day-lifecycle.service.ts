import type { WorkDay }
  from "../models/work-day.model";

import type {
  CompleteWorkDayCommand,
} from "./work-day-lifecycle.commands";

export interface WorkDayLifecycleService {
  completeWorkDay(
    command: CompleteWorkDayCommand,
  ): Promise<WorkDay>;
}
