import type { EventRepository } from "../../event-log/repositories/event.repository";
import type { TaskRepository } from "../repositories/task.repository";

export interface TaskLifecycleDependencies {
  taskRepository: TaskRepository;

  eventRepository: EventRepository;
}