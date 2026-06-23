import { InMemoryEventRepository } from "../infrastructure/repositories/in-memory-event.repository";
import { InMemoryTaskRepository } from "../infrastructure/repositories/in-memory-task.repository";

export class ApplicationContainer {
  public readonly taskRepository;

  public readonly eventRepository;

  public constructor() {
    this.taskRepository =
      new InMemoryTaskRepository();

    this.eventRepository =
      new InMemoryEventRepository();
  }
}

export const applicationContainer =
  new ApplicationContainer();
