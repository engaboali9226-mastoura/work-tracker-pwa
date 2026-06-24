import type { TaskRepository } from "../domains/tasks/repositories/task.repository";

import type { EventRepository } from "../domains/event-log/repositories/event.repository";

import { InMemoryTaskRepository } from "../infrastructure/repositories/in-memory-task.repository";

import { InMemoryEventRepository } from "../infrastructure/repositories/in-memory-event.repository";

export interface RepositoryFactory {
  createTaskRepository(): TaskRepository;

  createEventRepository(): EventRepository;
}

export class InMemoryRepositoryFactory
  implements RepositoryFactory
{
  public createTaskRepository(): TaskRepository {
    return new InMemoryTaskRepository();
  }

  public createEventRepository(): EventRepository {
    return new InMemoryEventRepository();
  }
}
