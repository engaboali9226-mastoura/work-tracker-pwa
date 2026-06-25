import type { EventRepository }
  from "../../event-log/repositories/event.repository";

import type { WorkDayRepository }
  from "../repositories/work-day.repository";

export interface WorkDayCreationDependencies {
  workDayRepository: WorkDayRepository;

  eventRepository: EventRepository;
}
