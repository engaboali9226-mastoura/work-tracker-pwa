import type { EventType } from "../../domains/event-log/models/event-type";

export interface NotionEventDto {
  eventId: string;

  eventType: EventType;

  entityType: string;

  entityId: string;

  occurredAt: string;

  description?: string;
}
