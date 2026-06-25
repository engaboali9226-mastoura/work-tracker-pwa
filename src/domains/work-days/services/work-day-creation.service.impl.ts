import type { EventLog }
  from "../../event-log/models/event.model";

import type { WorkDay }
  from "../models/work-day.model";

import { WorkDayAlreadyInProgressError }
  from "../errors/work-day-already-in-progress.error";

import type {
  CreateWorkDayCommand,
} from "./work-day-creation.commands";

import type {
  WorkDayCreationDependencies,
} from "./work-day-creation.dependencies";

import type {
  WorkDayCreationService,
} from "./work-day-creation.service";

export class WorkDayCreationServiceImpl
  implements WorkDayCreationService
{
  private readonly dependencies:
    WorkDayCreationDependencies;

  constructor(
    dependencies: WorkDayCreationDependencies,
  ) {
    this.dependencies = dependencies;
  }

  async createWorkDay(
    command: CreateWorkDayCommand,
  ): Promise<WorkDay> {

    const activeWorkDay =
      await this.dependencies
        .workDayRepository
        .findInProgressWorkDay();

    if (activeWorkDay) {
      throw new WorkDayAlreadyInProgressError();
    }

    const workDay: WorkDay = {
      dayKey: command.dayKey,

      date: command.date,

      areaId: command.areaId,

      siteId: command.siteId,

      projectId: command.projectId,

      contractorId: command.contractorId,

      contractNumber:
        command.contractNumber,

      startedAt: command.startedAt,

      endedAt: undefined,

      status: "in-progress",
    };

    await this.dependencies
      .workDayRepository
      .save(workDay);

    const event: EventLog = {
      eventId: crypto.randomUUID(),

      eventType: "work-day-started",

      entityType: "work-day",

      entityId: workDay.dayKey,

      occurredAt: command.startedAt,
    };

    await this.dependencies
      .eventRepository
      .save(event);

    return workDay;
  }
}
