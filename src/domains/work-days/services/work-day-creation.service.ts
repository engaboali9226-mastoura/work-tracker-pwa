import type { WorkDay }
  from "../models/work-day.model";

import type {
  CreateWorkDayCommand,
} from "./work-day-creation.commands";

export interface WorkDayCreationService {
  createWorkDay(
    command: CreateWorkDayCommand,
  ): Promise<WorkDay>;
}
