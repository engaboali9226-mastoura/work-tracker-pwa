export interface NotionEventDto {
  eventId: string;

  eventType: string;

  entityType: string;

  entityId: string;

  occurredAt: string;

  description?: string;
}
