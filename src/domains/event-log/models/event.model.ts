import type { EventType } from "./event-type";

export interface EventLog {
  eventId: string;

  eventType: EventType;

  entityId: string;

  occurredAt: string;

  description?: string;
}