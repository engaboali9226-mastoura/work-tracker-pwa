import type { EventRepository }
  from "../../event-log/repositories/event.repository";

import type { TaskRepository }
  from "../../tasks/repositories/task.repository";

import type { WorkDayRepository }
  from "../repositories/work-day.repository";

export interface WorkDayLifecycleDependencies {
  workDayRepository: WorkDayRepository;

  taskRepository: TaskRepository;

  eventRepository: EventRepository;
}
