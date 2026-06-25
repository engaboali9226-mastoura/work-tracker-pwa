import type { EventLog }
  from "../../event-log/models/event.model";

import {
  CategoryNotFoundError,
} from "../../task-categories/errors/category-not-found.error";

import {
  InvalidTaskClassificationError,
} from "../../task-categories/errors/invalid-task-classification.error";

import {
  SubCategoryNotFoundError,
} from "../../task-categories/errors/sub-category-not-found.error";

import { WorkDayNotFoundError }
  from "../../work-days/errors/work-day-not-found.error";

import type { Task }
  from "../models/task.model";

import type {
  CreateTaskCommand,
} from "./task-creation.commands";

import type {
  TaskCreationDependencies,
} from "./task-creation.dependencies";

import type {
  TaskCreationService,
} from "./task-creation.service";

export class TaskCreationServiceImpl
  implements TaskCreationService
{
  private readonly dependencies:
    TaskCreationDependencies;

  constructor(
    dependencies: TaskCreationDependencies,
  ) {
    this.dependencies = dependencies;
  }

  async createTask(
    command: CreateTaskCommand,
  ): Promise<Task> {

    const category =
      await this.dependencies
        .taskCategoryRepository
        .findById(
          command.categoryId,
        );

    if (!category) {
      throw new CategoryNotFoundError(
        command.categoryId,
      );
    }

    const subCategory =
      await this.dependencies
        .subCategoryRepository
        .findById(
          command.subCategoryId,
        );

    if (!subCategory) {
      throw new SubCategoryNotFoundError(
        command.subCategoryId,
      );
    }

    if (
      subCategory.categoryId !==
      command.categoryId
    ) {
      throw new InvalidTaskClassificationError(
        command.categoryId,
        command.subCategoryId,
      );
    }

    const workDay =
      await this.dependencies
        .workDayRepository
        .findByKey(
          command.workDayKey,
        );

    if (!workDay) {
      throw new WorkDayNotFoundError(
        command.workDayKey,
      );
    }

    const task: Task = {
      taskKey: command.taskKey,

      workDayKey: command.workDayKey,

      title: command.title,

      categoryId:
        command.categoryId,

      subCategoryId:
        command.subCategoryId,

      areaId:
        command.areaId ??
        workDay.areaId,

      siteId:
        command.siteId ??
        workDay.siteId,

      projectId:
        command.projectId ??
        workDay.projectId,

      contractorId:
        command.contractorId ??
        workDay.contractorId,

      startTime:
        command.startTime,

      endTime: undefined,

      status: "active",
    };

    await this.dependencies
      .taskRepository
      .save(task);

    const event: EventLog = {
      eventId:
        crypto.randomUUID(),

      eventType:
        "task-started",

      entityType:
        "task",

      entityId:
        task.taskKey,

      occurredAt:
        command.startTime,
    };

    await this.dependencies
      .eventRepository
      .save(event);

    return task;
  }
}
