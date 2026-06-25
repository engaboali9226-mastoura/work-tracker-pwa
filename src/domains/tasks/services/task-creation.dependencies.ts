import type { EventRepository }
  from "../../event-log/repositories/event.repository";

import type { WorkDayRepository }
  from "../../work-days/repositories/work-day.repository";

import type { TaskCategoryRepository }
  from "../../task-categories/repositories/task-category.repository";

import type { SubCategoryRepository }
  from "../../sub-categories/repositories/sub-category.repository";

import type { TaskRepository }
  from "../repositories/task.repository";

export interface TaskCreationDependencies {
  taskRepository: TaskRepository;

  workDayRepository: WorkDayRepository;

  eventRepository: EventRepository;

  taskCategoryRepository:
    TaskCategoryRepository;

  subCategoryRepository:
    SubCategoryRepository;
}
