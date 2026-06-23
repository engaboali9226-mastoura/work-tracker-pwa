import type { EventLog } from "../models/event.model";

export interface EventRepository {
  save(
    event: EventLog,
  ): Promise<void>;
}