import type { EventRepository } from "../../domains/event-log/repositories/event.repository";
import type { EventLog } from "../../domains/event-log/models/event.model";

export class InMemoryEventRepository
  implements EventRepository
{
  private readonly events = new Map<
    string,
    EventLog
  >();

  public async save(
    event: EventLog,
  ): Promise<void> {
    this.events.set(
      event.eventId,
      event,
    );
  }
}
