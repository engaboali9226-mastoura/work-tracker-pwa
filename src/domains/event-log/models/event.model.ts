import type { EventType } from "./event-type";

export interface EventLog {
  eventId: string;

  eventType: EventType;

  entityType: string;

  entityId: string;

  occurredAt: string;

  description?: string;
}